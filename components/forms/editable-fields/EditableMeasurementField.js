import React, {useEffect, useState} from 'react';
import {Formik, useFormikContext} from "formik";
import EditableField from "./EditableField";
import {isSet} from "../../../library/helpers/utils-helper";

const EditableMeasurementField = (props) => {
    const formik = useFormikContext();
    return (
        <div className={"editable-field--form--select d-flex"}>
            {isSet(formik) &&
            <>
                <input
                    name={"amount"}
                    value={formik.values.amount}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <select
                    name={"unit"}
                    onChange={formik.handleChange}
                    value={formik.values.unit}
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
            </>
            }
        </div>
    );
};

export default EditableMeasurementField;
