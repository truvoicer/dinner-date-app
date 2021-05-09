import React, {useEffect, useState} from 'react';
import {Formik, useFormikContext} from "formik";
import EditableField from "./EditableField";
import {isSet} from "../../../library/helpers/utils-helper";

const EditableSelectField = (props) => {
    const formik = useFormikContext();
    const getFieldProps = () => {
        if (isSet(formik)) {
            return {
                value: formik.values[props.field],
                onBlur: formik.handleBlur,
                onChange: formik.handleChange
            }
        }
        return {};
    }
        return (

            <div className={"editable-field--form--select"}>
                {isSet(formik) &&
                <select
                    name={props.field}
                    onChange={formik.handleChange}
                    value={formik.values[props.field]}
                >
                    {props.options.map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                }
            </div>
        );
    }
;

export default EditableSelectField;
