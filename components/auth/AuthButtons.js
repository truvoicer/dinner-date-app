import React from 'react';
import {SESSION_STATE_KEY} from "../../library/redux/constants/session-constants";
import {connect} from "react-redux";
import {isAuthenticated} from "../../library/redux/actions/session-actions";
import Link from "next/link"
import {LOGIN_VIEW, SIGNUP_VIEW} from "../../config/constants/views/view-constants";
import {getRouteItem} from "../../library/helpers/page-helper";

const AuthButtons = ({session}) => {
    return (
        <>
            {isAuthenticated()
                ?
                <a href="login.html" className="login">
                    <i className="icofont-user"/>
                    <span>My Account</span>
                </a>
                :
                <>
                    <Link href={getRouteItem(LOGIN_VIEW).href}>
                        <a className="login">
                            <i className="icofont-user"/>
                            <span>LOG IN</span>
                        </a>
                    </Link>
                    <Link href={getRouteItem(SIGNUP_VIEW).href}>
                        <a className="signup">
                            <i className="icofont-users"/>
                            <span>SIGN UP</span>
                        </a>
                    </Link>
                </>
            }
        </>
    );
};
function mapStateToProps(state)
{
    return {
        session: state[SESSION_STATE_KEY]
    }
}
export default connect(
mapStateToProps,
null
)(AuthButtons)
