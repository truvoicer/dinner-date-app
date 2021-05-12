import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookMessenger, faSkype, faTwitter, faVimeo} from "@fortawesome/free-brands-svg-icons";
import {faRss} from "@fortawesome/free-solid-svg-icons";

const HeaderSocialIconsMenu = () => {
    return (
        <ul className="social-icons d-flex align-items-center">
            <li>
                <p>
                    Find us on :
                </p>
            </li>
            <li>
                <a href="#" className="fb">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
            </li>
            <li>
                <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a href="#" className="vimeo">
                    <FontAwesomeIcon icon={faVimeo} />
                </a>
            </li>
            <li>
                <a href="#" className="skype">
                    <FontAwesomeIcon icon={faSkype} />
                </a>
            </li>
            <li>
                <a href="#" className="rss">
                    <FontAwesomeIcon icon={faRss} />
                </a>
            </li>
        </ul>
    );
};

export default HeaderSocialIconsMenu;
