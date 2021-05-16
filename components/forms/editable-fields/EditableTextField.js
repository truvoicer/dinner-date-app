import React, {useEffect, useState} from 'react';
import {Formik, useFormikContext} from "formik";
import EditableField from "./EditableField";
import {isSet} from "../../../library/helpers/utils-helper";

const EditableTextField = (props) => {
        const formik = useFormikContext();
    console.log(formik.values[props.field])
        return (
            <div className={"editable-field--form--text"}>
                {isSet(formik) &&
                <input
                    name={props.field}
                    value={formik.values[props.field] || ""}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                }
            </div>
        );
    }
;

export default EditableTextField;
