import React  from "react";
import { GoogleLogin } from 'react-google-login';
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {googleLoginConfig} from "../../../config/google/google-config";

const AuthGoogle = ({session}) => {
    const onSuccess = (response) => {
        console.log(response)
    }
    const responseFail = (response) => {
        console.error(response);
    }
    return (
        <GoogleLogin
            clientId={googleLoginConfig.clientId}
            autoLoad={false}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={responseFail}
            cookiePolicy={'single_host_origin'}
        />
    );
}

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY]
    };
}
export default connect(
    mapStateToProps,
    null
)(AuthGoogle);
