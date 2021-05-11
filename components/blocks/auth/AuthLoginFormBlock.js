import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import FullWidthSection from "../../layout/sections/FullWidthSection";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {
    LOGIN_VIEW,
    PROFILE_VIEW,
    SIGNUP_VIEW
} from "../../../config/constants/views/view-constants";
import store from "../../../library/redux/store";
import {Formik} from "formik";
import {AUTH_LOGIN_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
import {connect} from "react-redux";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY, SESSION_USER
} from "../../../library/redux/constants/session-constants";
import {useRouter} from "next/router";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {GlobalContext} from "../../contexts/GlobalContext";
import {GLOBAL_STATE_KEY} from "../../../library/redux/constants/global-constants";
import {addGlobalModalAction, showModalAction} from "../../../library/redux/actions/global-actions";

const AuthLoginFormBlock = ({session, global}) => {
    const router = useRouter();
    const globalContext = useContext(GlobalContext);
    useEffect(() => {
        if (isAuthenticated()) {
            router.replace(getRouteItem(PROFILE_VIEW).href);
        }
        addGlobalModalAction({name: "modal1"})
        addGlobalModalAction({name: "modal2", size: "sm"})
        addGlobalModalAction({name: "modal3"})
    }, [session[SESSION_AUTHENTICATED], session[SESSION_AUTHENTICATING], session[SESSION_USER]])

    const submitHandler = (values, { setSubmitting }) => {
        setSubmitting(true)
        globalContext.showModal({name: "modal1", component: (
            <>
            <h2 style={{color: "#000000"}}>MODAL 1</h2>
                <button
                    onClick={() => {
                        showModalAction({name: "modal2"})
                    }}
                >
                    Click
                </button>
            </>
        )});
        globalContext.showModal({name: "modal2", component: (<h2 style={{color: "#000000"}}>MODAL 33333</h2>)});
        showModalAction({name: "modal1"})
        // store.dispatch({type: AUTH_LOGIN_REQUESTED, payload: values})
    }
    return (
        <FullWidthSection
            className={"login-section padding-tb"}
            wrapperClassName={"account-wrapper"}
        >
            <h3 className="title">Login</h3>
            <Formik
                enableReinitialize={true}
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={submitHandler}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form className="account-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            {errors?.email && <label>{errors.email}</label>}
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        <div className="form-group">
                            {errors?.password && <label>{errors.password}</label>}
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                <div className="checkgroup">
                                    <input type="checkbox" name="remember" id="remember"/>
                                    <label htmlFor="remember">Remember Me</label>
                                </div>
                                <Link href={getRouteItem(LOGIN_VIEW)?.href}>
                                    <a>Forget Password?</a>
                                </Link>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="d-block lab-btn" type={"submit"}>
                                <span>Submit Now</span>
                            </button>
                        </div>
                    </form>
                    )}
            </Formik>
                    <div className="account-bottom">
                        <span className="d-block cate pt-10">
                            Don’t Have any Account?
                            <Link href={getRouteItem(SIGNUP_VIEW)?.href}>
                                <a> Sign Up</a>
                            </Link>
                        </span>

                        <span className="or">
                            <span>or</span>
                        </span>

                        <h5 className="subtitle">Login With Social Media</h5>
                        <ul className="social-media social-color lab-ul d-flex justify-content-center">
                            <li>

                                <a href="#" className="facebook">
                                    <i className="icofont-facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i className="icofont-twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="linkedin">
                                    <i className="icofont-linkedin"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram">
                                    <i className="icofont-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="pinterest">
                                    <i className="icofont-pinterest"/>
                                </a>
                            </li>
                        </ul>
                    </div>

        </FullWidthSection>
    );
};
function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY],
        global: state[GLOBAL_STATE_KEY]
    };
}
export default connect(
    mapStateToProps,
    null
)(AuthLoginFormBlock);
