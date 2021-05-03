import React from 'react';
import SocialIconsMenu from "../../menus/SocialIconsMenu";
import HeaderMenu from "../../menus/HeaderMenu";
import AuthButtons from "../../auth/AuthButtons";
import HeaderTopLeftMenu from "../../menus/HeaderTopLeftMenu";

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-area">
                        <HeaderTopLeftMenu />
                        <SocialIconsMenu />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                                <img src="/images/logo/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="menu-area">
                            <HeaderMenu />
                            <AuthButtons />

                            <div className="header-bar d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none">
                                <i className="icofont-info-square"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
