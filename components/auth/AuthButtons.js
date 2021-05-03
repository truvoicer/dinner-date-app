import React from 'react';

const AuthButtons = () => {
    return (
        <>
            <a href="login.html" className="login">
                <i className="icofont-user"/> <span>LOG IN</span>
            </a>
            <a href="signup.html" className="signup">
                <i className="icofont-users"/>
                <span>SIGN UP</span>
            </a>
        </>
    );
};

export default AuthButtons;
