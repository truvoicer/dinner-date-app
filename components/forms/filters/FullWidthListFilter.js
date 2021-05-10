import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {genders} from "../../../config/forms/selects/select-options";
import {range} from "../../../library/helpers/utils-helper";
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {LOCALE_COUNTRIES, LOCALE_STATE_KEY} from "../../../library/redux/constants/locale-constants";
import store from "../../../library/redux/store";
import {COUNTRY_LIST_FETCH_REQUESTED} from "../../../library/redux/sagas/locale/locale-sagas";

const FullWidthListFilter = ({session, locale}) => {
    const initialFormValuesObject = {
        gender: "male",
        gender_preference: "female",
        age_start: "18",
        age_end: "40",
        country: ""
    };
    const [initialFormValues, setInitialFormValues] = useState(initialFormValuesObject)

    const submitHandler = (values, {setIsSubmitting}) => {
        let requestData = {...values};
        console.log(requestData);
    }

    useEffect(() => {
        if (locale[LOCALE_COUNTRIES].length === 0) {
            store.dispatch({type: COUNTRY_LIST_FETCH_REQUESTED, payload: {}})
        }
    }, [locale[LOCALE_COUNTRIES]])

    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={submitHandler}
        >
            {({
                  values,
                  setFieldValue,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  submitForm
              }) => (
                <div className="member-filter">
                    <div className="member-filter-inner">
                        <form action="/" className="filter-form" onSubmit={handleSubmit}>
                            <div className="gender">
                                <div className="custom-select right w-100">
                                    <select
                                        name="gender"
                                        className=""
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="">I am a</option>
                                        {genders.map((gender, index) => (
                                            <option value={gender.value} key={index}>
                                                {gender.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="person">
                                <div className="custom-select right w-100">
                                    <select
                                        name="gender_preference"
                                        value={values.gender_preference}
                                        className=""
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="0">Looking for</option>
                                        {genders.map((gender, index) => (
                                            <option value={gender.value} key={index}>
                                                {gender.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="age">
                                <div className="right d-flex justify-content-between w-100">
                                    <div className="custom-select">
                                        <select
                                            name="age_start"
                                            value={values.age_start}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {range(18, 30, 1).map(index => (
                                                <option value={index} key={index}>{index}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="custom-select">
                                        <select
                                            name="age_end"
                                            value={values.age_end}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {range(36, 70, 1).map(index => (
                                                <option value={index} key={index}>{index}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="city">
                                <div className="custom-select right w-100">
                                    <select
                                        name="country"
                                        className=""
                                        value={values.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="0">Choose Your Country
                                        </option>
                                        {locale[LOCALE_COUNTRIES].map((country, index) => (
                                            <option value={country.id} key={index}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button className="lab-btn" type="submit">
                                Search now
                                <i className="icofont-search-2"/>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    );
};
function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY],
        locale: state[LOCALE_STATE_KEY]
    }
}

export default connect(
    mapStateToProps,
    null
)(FullWidthListFilter);
