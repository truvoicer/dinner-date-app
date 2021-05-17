import React from 'react';
import {useFormikContext} from "formik";
import {isSet} from "../../../library/helpers/utils-helper";

const EditableTextField = (props) => {
    const formik = useFormikContext();
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
};

export default EditableTextField;
