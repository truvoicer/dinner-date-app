import React, {useEffect} from 'react';
import FileUploadField from "../../forms/upload/FileUpload/FileUploadField";
import store from "../../../library/redux/store";
import {isObjectEmpty} from "../../../library/helpers/utils-helper";
import {SESSION_STATE_KEY, SESSION_USER} from "../../../library/redux/constants/session-constants";
import {connect} from "react-redux";
import {getUserMediaListByCategory} from "../../../library/helpers/user-helper";
import {
    USER_MEDIA_FETCH_REQUESTED,
    USER_MEDIA_UPDATE_REQUESTED
} from "../../../library/redux/sagas/media/media-sagas";
import GalleryImageThumb from "../../media/GalleryImageThumb";

const PhotosMediaBlock = ({session}) => {
    const MEDIA_CATEGORIES = [
        "media_photo"
    ];
    const fileUploadHandler   = ({name, file}) => {
        store.dispatch({
            type: USER_MEDIA_UPDATE_REQUESTED,
            payload: {
                upload_type: "media",
                type: "image",
                media_category: name,
                file: file
            },
            user: session[SESSION_USER]
        })
    }
    useEffect(() => {
        if (!isObjectEmpty(session[SESSION_USER])) {
            store.dispatch({
                type: USER_MEDIA_FETCH_REQUESTED,
                payload: {
                    media_category: MEDIA_CATEGORIES
                },
                user: session[SESSION_USER]
            })
        }
    }, []);
    return (
        <>
            <div className="media-title">
                <h2>All Photos</h2>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <FileUploadField
                            name={"media_photo"}
                            callback={fileUploadHandler}
                            acceptedFilesMessage={"Accepted"}
                            allowedFileTypes={[
                                {mime_type: "image/jpeg"},
                                {mime_type: "image/png"},
                                {mime_type: "image/jpg"}
                            ]}
                            showDropzone={true}
                        >
                            <div className="custom-upload">
                                <div className="file-btn">
                                    <i className="icofont-upload-alt"/>
                                    Upload
                                </div>
                            </div>
                        </FileUploadField>
                    </li>
                    <li className="upload-now">
                        <div className="custom-upload">
                            <div className="file-btn">
                                <i className="icofont-upload-alt"/>
                                Add to Album
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-4 g-3">
                    {getUserMediaListByCategory(MEDIA_CATEGORIES).map((file, index) => (
                        <div className="col" key={index}>
                            <GalleryImageThumb src={file.public_url} />
                        </div>
                    ))}
                </div>
                <div className="load-btn">
                    <a href="#" className="lab-btn">
                        Load More
                        <i className="icofont-spinner"/>
                    </a>
                </div>
            </div>
        </>
    );
};
export default connect(
    (state) => {
        return {
            session: state[SESSION_STATE_KEY]
        }
    },
    null
)(PhotosMediaBlock);
