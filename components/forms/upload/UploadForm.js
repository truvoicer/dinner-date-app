import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {getComponent} from "../../../library/helpers/page-helper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSave} from "@fortawesome/free-solid-svg-icons";

const UploadForm = ({field, onSubmit}) => {
    const [initialFormValues, setInitialFormValues] = useState({
       [field]: ""
    })
    const submitHandler = (values, {setSubmitting}) => {
        let requestData = {...values};
        console.log(requestData)

    }
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialFormValues}
            onSubmit={onSubmit ? onSubmit : submitHandler}
        >
            {({
                  values,
                  setFieldValue,
                  handleSubmit,
                  submitForm
              }) => (
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="file"
                        />
                    </Form>
            )}
        </Formik>
    );
};

export default UploadForm;
