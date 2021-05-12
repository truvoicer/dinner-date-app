import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING, SESSION_STATE_KEY,
    SESSION_USER
} from "../../../library/redux/constants/session-constants";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {
    PROFILE_VIEW,
} from "../../../config/constants/views/view-constants";
import store from "../../../library/redux/store";
import {AUTH_LOGIN_REQUESTED, AUTH_SIGNUP_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
import FullWidthSection from "../../layout/sections/FullWidthSection";
import {Formik} from "formik";
import Link from "next/link";
import {connect} from "react-redux";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import {faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthSocialIconsMenu from "../../menus/AuthSocialIconsMenu";

const AuthSignUpFormBlock = ({session}) => {
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated()) {
            router.replace(getRouteItem(PROFILE_VIEW).href);

        }
    }, [session[SESSION_AUTHENTICATED], session[SESSION_AUTHENTICATING], session[SESSION_USER]])

    const submitHandler = (values, {setSubmitting}) => {
        setSubmitting(true)
        store.dispatch({type: AUTH_SIGNUP_REQUESTED, payload: values})
    }
    return (
        <FullWidthSection
            className={"login-section padding-tb"}
            wrapperClassName={"account-wrapper"}
        >
            <h3 className="title">Register Now</h3>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                }}
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
                    if (!values.confirm_password) {
                        errors.password = 'Required';
                    }
                    if (values.confirm_password !== values.password) {
                        errors.confirm_password = "Password don't match";
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
                            {errors?.username && <label>{errors.username}</label>}
                            <input
                                type="text"
                                placeholder="User Name"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                        </div>
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
                            {errors?.confirm_password && <label>{errors.confirm_password}</label>}
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type={"submit"}
                                className="d-block lab-btn"
                            >
                                <span>Get Started Now</span>
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            <div className="account-bottom">
                <span className="d-block cate pt-10">Are you a member? <a href="login.html">Login</a></span>
                <span className="or"><span>or</span></span>
                <h5 className="subtitle">Register With Social Media</h5>
                <AuthSocialIconsMenu />
            </div>
        </FullWidthSection>
    );
};

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY]
    };
}

export default connect(
    mapStateToProps,
    null
)(AuthSignUpFormBlock);