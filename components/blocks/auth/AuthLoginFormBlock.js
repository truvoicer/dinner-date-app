import React from 'react';
import Link from 'next/link';
import FullWidthSection from "../../layout/sections/FullWidthSection";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {LOGIN_VIEW, SIGNUP_VIEW} from "../../../config/views/constants/view-constants";

const AuthLoginFormBlock = () => {
    return (
        <FullWidthSection
            className={"login-section padding-tb"}
            wrapperClassName={"account-wrapper"}
        >
            <h3 className="title">Login</h3>
            <form className="account-form">
                <div className="form-group">
                    <input type="text" placeholder="User Name" name="username"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password"/>
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
                    <button className="d-block lab-btn">
                        <span>Submit Now</span>
                    </button>
                </div>
            </form>
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

export default AuthLoginFormBlock;
