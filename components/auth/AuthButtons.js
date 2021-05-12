import React, {useContext} from 'react';
import {SESSION_STATE_KEY} from "../../library/redux/constants/session-constants";
import {isAuthenticated} from "../../library/redux/actions/session-actions";
import Link from "next/link"
import {LOGIN_VIEW, PROFILE_VIEW, SIGNUP_VIEW} from "../../config/constants/views/view-constants";
import {getRouteItem} from "../../library/helpers/page-helper";
import {GlobalContext} from "../contexts/GlobalContext";
import AuthLoginFormBlock from "../blocks/auth/AuthLoginFormBlock";
import AuthSignUpFormBlock from "../blocks/auth/AuthSignUpFormBlock";
import {connect} from "react-redux";

const AuthButtons = ({session}) => {
    const globalContext = useContext(GlobalContext);
    return (
        <>
            {isAuthenticated()
                ?
                <a href={getRouteItem(PROFILE_VIEW).href} className="login">
                    <i className="icofont-user"/>
                    <span>My Account</span>
                </a>
                :
                <>
                    <Link href={getRouteItem(LOGIN_VIEW).href}>
                        <a className="login"
                           onClick={(e) => {
                                e.preventDefault();
                                globalContext.showModal({
                                    name: "login_form",
                                    component: (<AuthLoginFormBlock />),
                                    size: "md"
                                })
                            }}
                        >
                            <i className="icofont-user"/>
                            <span>LOG IN</span>
                        </a>
                    </Link>
                    <Link href={getRouteItem(SIGNUP_VIEW).href}>
                        <a
                            className="signup"
                            onClick={(e) => {
                                e.preventDefault();
                                globalContext.showModal({
                                    name: "login_form",
                                    component: (<AuthSignUpFormBlock />),
                                    size: "md"
                                })
                            }}
                        >
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
