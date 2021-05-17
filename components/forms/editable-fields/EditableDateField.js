import React, {useEffect, useState} from 'react';
import {Formik, useFormikContext} from "formik";
import DatePicker from "react-datepicker";
import {isSet} from "../../../library/helpers/utils-helper";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const EditableDateField = (props) => {
        const formik = useFormikContext();
        const getDateValue = () => {
            let dob = moment(formik.values[props.field]);
            if (dob.isValid()) {
                dob = dob.toDate()
            } else {
                dob = "";
            }
            return dob;
        }
        return (
            <div className={"editable-field--form--datepicker"}>
                {isSet(formik) &&
                <DatePicker
                    selected={getDateValue()}
                    onChange={date => {
                        formik.setFieldValue(props.field, date)
                    }}
                    dateFormat="yyyy-MM-dd"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
                }
            </div>
        );
    }
;

export default EditableDateField;
