import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import AuthGoogle from "../forms/auth/AuthGoogle";
import AuthFacebook from "../forms/auth/AuthFacebook";

const AuthSocialIconsMenu = () => {
    return (

        <ul className="social-media social-color justify-content-center d-flex lab-ul">
            <li>
                <a className="facebook">
                    <AuthFacebook />
                </a>
            </li>
            <li>
                <a className="facebook">
                    <AuthGoogle />
                </a>
            </li>
            <li>
                <a className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a className="pinterest">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
            </li>
        </ul>
    );
};

export default AuthSocialIconsMenu;
