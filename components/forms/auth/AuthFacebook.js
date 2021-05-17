import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {facebookLoginConfig} from "../../../config/facebook/facebook-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {isNotEmpty, isObject, isObjectEmpty} from "../../../library/helpers/utils-helper";
import {validateResponse} from "../../../library/api/helpers/api-helpers";
import store from "../../../library/redux/store";
import {EXTERNAL_PROVIDER_AUTH_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";

const requiredTokenFields = [
    "accessToken", "data_access_expiration_time", "email", "id", "name", "signedRequest", "userID"
];

const AuthFacebook = ({session}) => {
    const providerName = "facebook";

    const onSuccess = (response) => {
        if (!isNotEmpty(response) && isObject(response) && isObjectEmpty(response)) {
            console.error("Error fetching profile data from facebook")
        }

        const validateTokenObj = validateResponse(requiredTokenFields, response, "Token object")
        if (!validateTokenObj) {
            return false;
        }

        store.dispatch(
            {
                type: EXTERNAL_PROVIDER_AUTH_REQUESTED,
                payload: {
                    ...{provider: providerName},
                    ...validateTokenObj
                }
            }
        )
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