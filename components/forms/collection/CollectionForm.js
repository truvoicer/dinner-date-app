import React, {useEffect, useState} from 'react';
import {isNotEmpty} from "../../../library/helpers/utils-helper";
import {Form, Formik} from "formik";
import {MEDIA_COLLECTION_REQUEST} from "../../../library/redux/sagas/media/media-sagas";
import CleanCheckboxList from "../lists/CleanCheckboxList";
import AnimatedCheckboxList from "../lists/AnimatedCheckboxList";

const CollectionForm = ({collection, collectionName, onSuccess}) => {
    const [initialFormValues, setInitialFormValues] = useState({
        name: ""
    })
    useEffect(() => {
        if (isNotEmpty(collection)) {
            setInitialFormValues({...initialFormValues, ...collection})
        }
    }, [collection]);
    const submitHandler = (values, {setSubmitting}) => {
        setSubmitting(true);
        let requestData = {...values};
        requestData.collection_name = collectionName;
        onSuccess(requestData)
    }
    return (
        <div className={"collection-form primary-modal-wrapper"}>
            <AnimatedCheckboxList
                name={"checks"}
                options={[
                    {
                        value: "one",
                        label: "One"
                    },
                    {
                        value: "two",
                        label: "Two"
                    },
                    {
                        value: "three",
                        label: "Three"
                    },
                    {
                        value: "four",
                        label: "Four"
                    },
                ]}
                callback={(values) => {
                    console.log(values)
                }}
                />
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
                        />
                        <button
                            className={"primary-button lab-btn"}
                            type={"submit"}
                        >
                            Add Album
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CollectionForm;
