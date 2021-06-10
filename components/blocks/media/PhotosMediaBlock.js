import React, {useEffect, useState} from 'react';
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
import {Formik, Form, Field, FieldArray} from 'formik';
import {
    buildMediaFilesInitialFormValues,
    mediaFilesSubmitHandler,
    PHOTO_ALBUM_COLLECTION
} from "../../../library/api/helpers/media-helpers";
import MediaControlsForm from "../../forms/media/MediaControlsForm";

const PhotosMediaBlock = ({session}) => {
    const MEDIA_CATEGORIES = [
        "media_photo"
    ];
    useEffect(() => {
        if (!isObjectEmpty(session[SESSION_USER])) {
            console.log("hell")
            store.dispatch({
                type: USER_MEDIA_FETCH_REQUESTED,
                payload: {
                    media_category: MEDIA_CATEGORIES
                },
                user: session[SESSION_USER]
            })
        }
    }, []);
    console.log(getUserMediaListByCategory(MEDIA_CATEGORIES))
    return (
        <>
            <div className="media-title">
                <h2>All Photos</h2>
            </div>
            <div className="media-content">
                <Formik
                    enableReinitialize={true}
                    initialValues={buildMediaFilesInitialFormValues(getUserMediaListByCategory(MEDIA_CATEGORIES))}
                    onSubmit={mediaFilesSubmitHandler}
                >
                    {({values, handleChange, handleSubmit, setFieldValue}) => {
                        return (
                            <>
                                <MediaControlsForm collectionName={PHOTO_ALBUM_COLLECTION}/>
                                <Form onSubmit={handleSubmit}>
                                    <div
                                        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-4 g-3">
                                        {getUserMediaListByCategory(MEDIA_CATEGORIES).map((file, index) => {
                                            return (
                                                <div className="col" key={index}>
                                                    <label>
                                                        <GalleryImageThumb
                                                            src={file.public_url}
                                                            inputElement={(
                                                                <input
                                                                    className={"gallery-image-thumb__checkbox"}
                                                                    type="checkbox"
                                                                    name="files"
                                                                    value={parseInt(file.id)}
                                                                    onChange={handleChange}
                                                                    checked={values.files.includes(file.id.toString())}
                                                                    style={{
                                                                        display: `${values.show_checkboxes ? "block" : "none"}`
                                                                    }}
                                                                />
                                                            )}
                                                        />
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Form>
                            </>
                        )
                    }}
                </Formik>
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
