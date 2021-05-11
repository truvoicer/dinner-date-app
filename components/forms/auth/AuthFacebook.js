import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {facebookLoginConfig} from "../../../config/facebook/facebook-config";

const AuthFacebook = ({session}) => {
    const onSuccess = (response) => {
        console.log(response)
    }
    const onFailure = (response) => {
        console.error(response);
    }
    return (
        <FacebookLogin
            appId={facebookLoginConfig.appId}
            autoLoad={false}
            fields="name,email,picture"
            callback={onSuccess}
            onFailure={onFailure}
        />
    )
}
function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY]
    };
}
export default connect(
    mapStateToProps,
    null
)(AuthFacebook);