import React, {useEffect, useState} from 'react';
import {isNotEmpty, isObject} from "../../../library/helpers/utils-helper";
import {Form, Formik} from "formik";
import {
    MEDIA_COLLECTION_ADD_FILE_TYPE,
    MEDIA_COLLECTION_ALL_TYPE,
    MEDIA_COLLECTION_FETCH_REQUESTED, MEDIA_COLLECTION_LIST_TYPE,
    MEDIA_COLLECTION_REQUEST
} from "../../../library/redux/sagas/media/media-sagas";
import CleanCheckboxList from "../lists/CleanCheckboxList";
import AnimatedCheckboxList from "../lists/AnimatedCheckboxList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import store from "../../../library/redux/store";
import {
    SESSION_STATE_KEY,
    SESSION_USER,
    SESSION_USER_MEDIA,
    SESSION_USER_MEDIA_COLLECTIONS, SESSION_USER_MEDIA_COLLECTIONS_LISTS
} from "../../../library/redux/constants/session-constants";
import {connect} from "react-redux";

const CollectionForm = ({collection, collectionName, files, onSuccess, session}) => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState({
        name: ""
    })
    useEffect(() => {
        if (isNotEmpty(collection)) {
            setInitialFormValues({...initialFormValues, ...collection})
        }
    }, [collection]);

    // useEffect(() => {
    //     const userMediaCollections = user[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS];
    //     if (!isNotEmpty(userMediaCollections[collectionName])) {
    //
    //     }
    // }, [user[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS]]);

    useEffect(() => {
        store.dispatch({
            type: MEDIA_COLLECTION_FETCH_REQUESTED,
            payload: {collectionName: collectionName},
            collectionRequestType: MEDIA_COLLECTION_LIST_TYPE,
            user: session[SESSION_USER]
        })
    }, []);

    const submitHandler = (values, {setSubmitting}) => {
        setSubmitting(true);
        let requestData = {...values};
        requestData.collection_name = collectionName;
        onSuccess(requestData)
    }

    const userMediaCollections = session[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS][SESSION_USER_MEDIA_COLLECTIONS_LISTS];
    return (
        <div className={"collection-form modal-list-wrapper"}>
            <a
                className={"collection-form--create-trigger"}
                onClick={(e) => {
                    e.preventDefault();
                    setShowCreateForm(!showCreateForm);
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </a>
            {showCreateForm &&
            <Formik
                enableReinitialize={true}
                validate={values => {
                    return {}
                }}
                onSubmit={submitHandler}
                initialValues={initialFormValues}>
                {({
                      values,
                      handleBlur,
                      handleChange,
                      handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <input
                            className={"primary-text-input"}
                            name={"name"}
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={"text"}
                        />
                        <button
                            className={"primary-button lab-btn"}
                            type={"submit"}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </Form>
                )}
            </Formik>
            }
            <CleanCheckboxList
                name={"checks"}
                options={isNotEmpty(userMediaCollections[collectionName])? userMediaCollections[collectionName].map(item => {
                    return {
                        value: item.id,
                        label: item.label
                    }
                }) : []}
                callback={(values) => {
                    console.log(values)
                }}
                onClick={(value) => {
                    store.dispatch({
                        type: MEDIA_COLLECTION_REQUEST,
                        payload: {
                            userMediaCollectionId: value,
                            files: files
                        },
                        collectionRequestType: MEDIA_COLLECTION_ADD_FILE_TYPE,
                        user: session[SESSION_USER]
                    })
                    console.log(value)
                }}
            />

        </div>
    );
};

export default connect(
    (state) => {
        return {
            session: state[SESSION_STATE_KEY]
        }
    }
)(CollectionForm)
