import React from 'react';
import {useFormikContext} from "formik";
import {isSet} from "../../../library/helpers/utils-helper";

const EditableTextAreaField = (props) => {
        const formik = useFormikContext();

        return (
            <div className={"editable-field--form--textarea"}>
                {isSet(formik) &&
                <textarea
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

export default EditableTextAreaField;
