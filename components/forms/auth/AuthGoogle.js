import React  from "react";
import { GoogleLogin } from 'react-google-login';
import {connect} from "react-redux";
import {SESSION_STATE_KEY} from "../../../library/redux/constants/session-constants";
import {googleLoginConfig} from "../../../config/google/google-config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {isNotEmpty, isObject, isObjectEmpty} from "../../../library/helpers/utils-helper";
import store from "../../../library/redux/store";
import {EXTERNAL_PROVIDER_AUTH_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
const requiredProfileFields = [
    "email", "name", "givenName", "familyName"
];
const requiredTokenFields = [
    "token_type", "access_token", "scope", "expires_in", "id_token"
];
// "profileObj": {
//     "googleId": "114487428852519668971",
//         "imageUrl": "https://lh3.googleusercontent.com/a/AATXAJwalARPvyMHEHCEND9lJd4ORfVrsP4h8mYU2vrF=s96-c",
//         "email": "truvoiceruk@gmail.com",
//         "name": "Michael Truvoice",
//         "givenName": "Michael",
//         "familyName": "Truvoice"
// }
// "tokenObj": {
//     "token_type": "Bearer",
//         "access_token": "ya29.a0AfH6SMAamriTE_dR9dbJRJB8dtF2E0gIHpwydbezJK7nzIFVnkejsWxkRJo89KciAXxfNYarSP-_dY5jFmyeUtwucKdKwRdIIM1SQsGirjqzm5nJSrMaVsyzzv-GlsBwNCOLRSCdGYzWZ_oQmctnUCI_CBK3",
//         "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
//         "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAhowVHk2RIxEfBiVQtoSNCF_cRUd5OqLHu0uFeEXicRjHkq9Ng7090xX1X6E_kRNMgs_xJg",
//         "expires_in": 3599,
//         "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5ZWQ1N2Y0MjQ0OTEyODJhMTgwMjBmZDU4NTk1NGI3MGJiNDVhZTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDg4MzQ4MjI5NjU0LThhOXBudjUwNmtpdHI2NWlxM2c1YjBqdG83ZzNqbzNmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDg4MzQ4MjI5NjU0LThhOXBudjUwNmtpdHI2NWlxM2c1YjBqdG83ZzNqbzNmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NDg3NDI4ODUyNTE5NjY4OTcxIiwiZW1haWwiOiJ0cnV2b2ljZXJ1a0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Imo1SjNiV1NNU0pWOXNFN1N0VFAzWGciLCJuYW1lIjoiTWljaGFlbCBUcnV2b2ljZSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp3YWxBUlB2eU1IRUhDRU5EOWxKZDRPUmZWcnNQNGg4bVlVMnZyRj1zOTYtYyIsImdpdmVuX25hbWUiOiJNaWNoYWVsIiwiZmFtaWx5X25hbWUiOiJUcnV2b2ljZSIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNjIwODQ3Mzg1LCJleHAiOjE2MjA4NTA5ODUsImp0aSI6IjU3NjY0MzRkMWE0ZThkNzA0ZGZhY2UxZmM4NWU0NDNhNTMzZDFmYWYifQ.PSJy0VLlo-6AqlqPqfEjiKe81kMSJV4GzEnAQ4iJ-aDqtkPLMOf-O55tsYMV_z3CoIWCmJER97QqPD8kteJidMwvThADS0SwZHiB-78sFHmNpMD-X1hJGsnbKWBvGMTlBpasJmaFffCEWUjslqTvPXiB9yLxmorVrsXxDoal4qENOKqdNwRP6XanLJ_N1HerLp-YzZoZokq396Csb1EdUYPuNCiGNFeYHbPUepfDTa56bR49pLp-iiHdV-U3DoPl-_0Bxb0C4MlO-Wh3f4e0BaEhQdv_AA0UX6ts-91659QlSL-ReRgKizwWFXGHyssEUCgFhpNWacMQ1xxi-9dt3A",
//         "session_state": {
//         "extraQueryParams": {
//             "authuser": "0"
//         }
//     },
//     "first_issued_at": 1620847385463,
//         "expires_at": 1620850984463,
//         "idpId": "google"
// },
const validateResponse = (requiredFields, object, type) => {
    const requestData = {};
    for(let i = 0;i<requiredFields.length;i++) {
        let key = requiredFields[i];
        if (isNotEmpty(object[key])) {
            requestData[key] = object[key];
        } else {
            console.error(`${type} field [${key}] not valid`);
            return false;
        }
    }
    return requestData;
}
const AuthGoogle = ({session}) => {
    const providerName = "google";

    const onSuccess = (response) => {
        const tokenObj = response?.tokenObj;
        const profileObj = response?.profileObj;
        console.log(response)
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
