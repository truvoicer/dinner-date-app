import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../../contexts/GlobalContext";
import CollectionForm from "../../forms/collection/CollectionForm";
import {
    MODAL_COMPONENT, MODAL_CONTENT_CLASSES,
    MODAL_DIALOG_CLASSES,
    MODAL_NAME,
    MODAL_SIZE
} from "../../layout/layouts/global/objects/modal-object";
import {
    MEDIA_COLLECTION_ALL_TYPE,
    MEDIA_COLLECTION_FETCH_REQUESTED, MEDIA_COLLECTION_LIST_TYPE,
    MEDIA_COLLECTION_REQUEST
} from "../../../library/redux/sagas/media/media-sagas";
import store from "../../../library/redux/store";
import {connect} from "react-redux";
import {
    SESSION_STATE_KEY,
    SESSION_USER,
    SESSION_USER_MEDIA,
    SESSION_USER_MEDIA_COLLECTIONS
} from "../../../library/redux/constants/session-constants";
import {isNotEmpty} from "../../../library/helpers/utils-helper";
import {useRouter} from "next/router";
import Link from "next/link";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {GALLERY_VIEW} from "../../../config/constants/views/view-constants";

const AlbumsMediaBlock = ({session, parentTabEventName, rootTabEventName}) => {
    const router = useRouter();
    const COLLECTION_NAME = "photo_album";
    const globalContext = useContext(GlobalContext);

    useEffect(() => {
        store.dispatch({
            type: MEDIA_COLLECTION_FETCH_REQUESTED,
            payload: {collectionName: COLLECTION_NAME},
            collectionFetchType: MEDIA_COLLECTION_LIST_TYPE,
            user: session[SESSION_USER]}
        )
    }, []);

    const userMediaCollections = session[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS];
    console.log(parentTabEventName, rootTabEventName, userMediaCollections[COLLECTION_NAME])
    return (
        <>
            <div className="media-title">
                <h3>Album Lists</h3>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <a className="custom-upload file-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    globalContext.showModal({
                                        [MODAL_NAME]: "new_album",
                                        [MODAL_DIALOG_CLASSES]: "modal-list-dialog",
                                        [MODAL_COMPONENT]: (
                                            <CollectionForm
                                                collectionName={COLLECTION_NAME}
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
                    </li>
                </ul>
                <div className="row g-4">
                    {Array.isArray(userMediaCollections[COLLECTION_NAME]) && userMediaCollections[COLLECTION_NAME].map((collection, index) => (
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <div className="album text-center">
                                <div className="album-thumb">
                                    <Link
                                        href={{
                                            pathname:getRouteItem(GALLERY_VIEW).href,
                                            query: {
                                                ...router.query,
                                                ...{
                                                    collection: collection.name,
                                                    [rootTabEventName]: "gallery"
                                                }
                                            }
                                        }}
                                        shallow={true}
                                    >
                                    <a>
                                        <img src="/images/member/02.jpg" alt="album"/>
                                    </a>
                                    </Link>
                                </div>
                                <div className="album-content">
                                    <h6>{collection.label}</h6>

                                </div>
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
    }
)(AlbumsMediaBlock)