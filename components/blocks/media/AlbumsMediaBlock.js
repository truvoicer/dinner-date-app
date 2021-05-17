import React, {useContext} from 'react';
import {GlobalContext} from "../../contexts/GlobalContext";
import CollectionForm from "../../forms/collection/CollectionForm";
import {MODAL_COMPONENT, MODAL_NAME, MODAL_SIZE} from "../../layout/layouts/global/objects/modal-object";
import {MEDIA_COLLECTION_REQUEST} from "../../../library/redux/sagas/media/media-sagas";
import store from "../../../library/redux/store";
import {connect} from "react-redux";
import {SESSION_STATE_KEY, SESSION_USER} from "../../../library/redux/constants/session-constants";

const AlbumsMediaBlock = ({session}) => {
    const globalContext = useContext(GlobalContext);
    return (
        <>
            <div className="media-title">
                <h3>Album Lists</h3>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <div className="custom-upload">
                            <a
                                className="file-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    globalContext.showModal({
                                        [MODAL_NAME]: "new_album",
                                        [MODAL_COMPONENT]: (
                                            <CollectionForm
                                                collectionName={"photo_album"}
                                                onSuccess={(values) => {
                                                    console.log(values)
                                                    store.dispatch({type: MEDIA_COLLECTION_REQUEST, payload: values, user: session[SESSION_USER]})
                                                }}
                                            />
                                        ),
                                        [MODAL_SIZE]: "sm"
                                    })
                                }}
                            >
                                <i className="icofont-upload-alt"/>
                                New Album
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="album text-center">
                            <div className="album-thumb">
                                <a href="#">
                                    <img src="/images/member/02.jpg" alt="album"/>
                                </a>
                            </div>
                            <div className="album-content">
                                <h6>Private</h6>

                            </div>
                        </div>
                    </div>
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
    }
)(AlbumsMediaBlock)