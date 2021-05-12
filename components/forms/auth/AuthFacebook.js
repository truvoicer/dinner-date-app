import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {facebookLoginConfig} from "../../../config/facebook/facebook-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";

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
            render={renderProps => (
                <FontAwesomeIcon icon={faFacebook}  onClick={renderProps.onClick}/>
            )}
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