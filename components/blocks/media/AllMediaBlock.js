import React, {useEffect} from 'react';
import store from "../../../library/redux/store";
import {connect} from "react-redux";
import {SESSION_STATE_KEY, SESSION_USER} from "../../../library/redux/constants/session-constants";
import {isObjectEmpty} from "../../../library/helpers/utils-helper";
import {getUserMediaListByCategory} from "../../../library/helpers/user-helper";
import {USER_MEDIA_FETCH_REQUESTED} from "../../../library/redux/sagas/media/media-sagas";

const AllMediaBlock = ({session}) => {
    const MEDIA_CATEGORIES = [
        "media_photo",
        "media_audio",
        "media_video"
    ]

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
                <h3>Media Gallery</h3>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <div className="custom-upload">
                            <div className="file-btn">
                                <i className="icofont-upload-alt"/>
                                Upload
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-4 g-3">
                    {getUserMediaListByCategory(MEDIA_CATEGORIES).map((file, index) => (
                    <div className="col" key={index}>
                        <div className="media-thumb">
                            <img src={file.public_url} alt="img"/>
                        </div>
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
)(AllMediaBlock);
