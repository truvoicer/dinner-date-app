import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faSave} from '@fortawesome/free-solid-svg-icons'
import {getComponent} from "../../../library/helpers/page-helper";
import {getEditableFieldAction} from "../../../config/api/editable-fields/editable-fields-config";
import store from "../../../library/redux/store";
import {isObject} from "../../../library/helpers/utils-helper";
import {getValueLabel} from "../../../library/helpers/user-helper";

const EditableField = (props) => {
    const defaultFormValuesObject = {
        showForm: false
    };
    const getInitialFormValues = () => {
        let initialValues = {};
        if (!isObject(props.field)) {
            initialValues[props.field] = props.value;
        } else {
            Object.keys(props.field).map(key => {
                initialValues[key] = props.value[key];
            })
        }
        return initialValues;
    }
    const [initialFormValues, setInitialFormValues] = useState({
        ...defaultFormValuesObject,
        ...getInitialFormValues()
    });
    useEffect(() => {
        setInitialFormValues({
            ...defaultFormValuesObject,
            ...getInitialFormValues()
        })
    }, [props.field, props.value]);

    const submitHandler = (values, {setSubmitting}) => {
        setSubmitting(true);
        let requestData = {...values};

        if (isObject(props.value)) {
            Object.keys(props.field).map(key => {
                requestData[props.field[key]] = requestData[key];
            })
        }

        const action = getEditableFieldAction(props.name);
        if (!action) {
            return;
        }
        store.dispatch({type: action, payload: requestData})
    }
    const labelValues = getValueLabel({field: props.field, value: props.value});
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialFormValues}
            validate={props?.validation ? props.validation : (errors) => {
                return {};
            }}
            onSubmit={props?.onSubmit ? props.onSubmit : submitHandler}
        >
            {({
                  values,
                  setFieldValue,
                  handleSubmit,
                  submitForm
              }) => (
                <div className={`editable-field${props?.fullWidth ? "--full-width" : ""}`}>
                    <div className={"editable-field--form"}>
                        <Form onSubmit={handleSubmit}>
                            {!values.showForm
                                ?
                                <>
                                    <div className={`editable-field--label ${labelValues.length > 1 ? "d-flex" : ""}`}>
                                        {labelValues.map((value, index) => (
                                            <p
                                                key={index}
                                                className={`info-details ${(index === (labelValues.length - 1)) ? "mx-1" : ""}`}
                                            >
                                                {value || ""}
                                            </p>
                                        ))}
                                    </div>
                                </>
                                :
                                <>
                                    {getComponent({
                                        component: props.fieldComponent,
                                        props: props
                                    })}
                                </>

                            }
                        </Form>

                    </div>

                    {values.showForm &&
                    <span
                        className={"editable-field--submit"}
                        onClick={(e) => {
                            e.preventDefault();
                            submitForm()
                        }}
                    >
                            <FontAwesomeIcon icon={faSave}/>
                        </span>
                    }
                    <span
                        className={"editable-field--trigger"}
                        onClick={(e) => {
                            e.preventDefault();
                            setFieldValue("showForm", !values.showForm)
                        }}
                    >
                            <FontAwesomeIcon icon={faEdit}/>
                        </span>
                </div>
            )}
        </Formik>
    );
};

export default EditableField;
