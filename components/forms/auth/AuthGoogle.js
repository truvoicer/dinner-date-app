import React from "react";
import {GoogleLogin} from 'react-google-login';
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {googleLoginConfig} from "../../../config/google/google-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {isNotEmpty, isObject, isObjectEmpty} from "../../../library/helpers/utils-helper";
import store from "../../../library/redux/store";
import {EXTERNAL_PROVIDER_AUTH_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
import {validateResponse} from "../../../library/api/helpers/api-helpers";

const requiredProfileFields = [
    "email",
    "name",
    "givenName",
    "familyName"
];
const requiredTokenFields = [
    "token_type", "access_token", "scope", "expires_at", "expires_in", "id_token"
];

const AuthGoogle = ({session}) => {
    const providerName = "google";

    const onSuccess = (response) => {
        const tokenObj = response?.tokenObj;
        const profileObj = response?.profileObj;

        if (!isNotEmpty(profileObj) && isObject(profileObj) && isObjectEmpty(profileObj)) {
            console.error("Error fetching profile data from google")
        }
        if (!isNotEmpty(tokenObj) && isObject(tokenObj) && isObjectEmpty(tokenObj)) {
            console.error("Error fetching token data from google")
        }

        const validateTokenObj = validateResponse(requiredTokenFields, tokenObj, "Token object")
        if (!validateTokenObj) {
            return false;
        }

        const validateProfileObj = validateResponse(requiredProfileFields, profileObj, "Profile object")
        if (!validateProfileObj) {
            return false;
        }
        store.dispatch(
            {
                type: EXTERNAL_PROVIDER_AUTH_REQUESTED,
                payload: {
                    ...{provider: providerName},
                    ...validateTokenObj,
                    ...validateProfileObj
                }
            }
        )
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
            render={renderProps => (
                <FontAwesomeIcon icon={faGoogle}  onClick={renderProps.onClick}/>
            )}
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
