import React from 'react';

const SocialIconsMenu = () => {
    return (
        <ul className="social-icons d-flex align-items-center">
            <li>
                <p>
                    Find us on :
                </p>
            </li>
            <li>
                <a href="#" className="fb"><i className="icofont-facebook-messenger"/></a>
            </li>
            <li>
                <a href="#" className="twitter"><i className="icofont-twitter"/></a>
            </li>
            <li>
                <a href="#" className="vimeo"><i className="icofont-vimeo"/></a>
            </li>
            <li>
                <a href="#" className="skype"><i className="icofont-skype"/></a>
            </li>
            <li>
                <a href="#" className="rss"><i className="icofont-rss-feed"/></a>
            </li>
        </ul>
    );
};

export default SocialIconsMenu;
