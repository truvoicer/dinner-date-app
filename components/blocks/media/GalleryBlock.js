import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY,
    SESSION_USER,
    SESSION_USER_MEDIA,
    SESSION_USER_MEDIA_COLLECTIONS,
    SESSION_USER_MEDIA_COLLECTIONS_FILES,
} from "../../../library/redux/constants/session-constants";
import store from "../../../library/redux/store";
import {SESSION_USER_FETCH_REQUESTED} from "../../../library/redux/sagas/session/session-sagas";
import {getUserProfileValue} from "../../../library/helpers/user-helper";
import EditableField from "../../forms/editable-fields/EditableField";
import {
    SECTION_FIELDS_LIST,
    SECTION_FIELDS_SINGLE,
} from "../../../config/api/editable-fields/editable-fields-constants";
import {editProfileFormFieldList} from "../../../config/api/editable-fields/lists/edit-profile-form-field-list";
import {getExtraFieldProps} from "../../../config/api/editable-fields/editable-fields-config";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import {LOCALE_COUNTRIES, LOCALE_STATE_KEY} from "../../../library/redux/constants/locale-constants";
import {COUNTRY_LIST_FETCH_REQUESTED} from "../../../library/redux/sagas/locale/locale-sagas";
import {
    MEDIA_COLLECTION_ALL_TYPE,
    MEDIA_COLLECTION_FETCH_REQUESTED, MEDIA_COLLECTION_FILES_TYPE
} from "../../../library/redux/sagas/media/media-sagas";
import {isNotEmpty} from "../../../library/helpers/utils-helper";
import {useRouter} from "next/router";

const GalleryBlock = ({session}) => {
    const router = useRouter();
    useEffect(() => {
        if (isNotEmpty(router?.query?.collection)) {
            store.dispatch({
                    type: MEDIA_COLLECTION_FETCH_REQUESTED,
                    payload: {userCollectionName: router.query.collection},
                    collectionFetchType: MEDIA_COLLECTION_FILES_TYPE,
                    user: session[SESSION_USER]
                }
            )
        }
    }, [router.query.collection])

    const userMediaCollections = session[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS][SESSION_USER_MEDIA_COLLECTIONS_FILES];
    return (
        <>
            <div className="photo-title text-center border-radius-2 bg-theme p-1 mb-4">
                <h3 className="mb-0">All Uploaded Pictures</h3>
            </div>
            <div
                className="row g-3 g-lg-4 justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
                {Array.isArray(userMediaCollections[router.query.collection]) && router.query.collection.map((file, index) => (
                    <div className="col" key={index}>
                        <div className="gallery-img">
                            <img src="/images/member/03.jpg" alt="image" className="rounded" />
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
        </>
    );
};

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY],
        locale: state[LOCALE_STATE_KEY]
    }
}

export default connect(
    mapStateToProps,
    null
)(GalleryBlock);
