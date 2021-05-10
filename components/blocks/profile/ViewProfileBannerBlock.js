import React, {useEffect, useState} from 'react';
import FileUploadField from "../../forms/upload/FileUpload/FileUploadField";
import store from "../../../library/redux/store";
import {SESSION_USER_PROFILE_MEDIA_REQUESTED} from "../../../library/redux/sagas/user/user-sagas";
import {getUserMediaValue} from "../../../library/helpers/user-helper";
import {SESSION_STATE_KEY, SESSION_USER} from "../../../library/redux/constants/session-constants";
import {connect} from "react-redux";
import {isNotEmpty, isSet} from "../../../library/helpers/utils-helper";
import {MEMBERS_SINGLE, MEMBERS_STATE_KEY} from "../../../library/redux/constants/members-constants";

const ViewProfileBannerBlock = ({session, member}) => {
    const [profilePic, setProfilePic] = useState("images/profile/Profile.jpg")
    const [profileCover, setProfileCover] = useState("images/profile/cover.jpg")

    useEffect(() => {
        const files = member[MEMBERS_SINGLE]?.files;
        const getProfileCover = getUserMediaValue({
            files: files,
            mediaCategory: "profile_cover"
        });
        if (isNotEmpty(getProfileCover)) {
            setProfileCover(getProfileCover)
        }
        const getProfilePic = getUserMediaValue({
            files: files,
            mediaCategory: "profile_pic"
        });
        if (isNotEmpty(getProfilePic)) {
            setProfilePic(getProfilePic)
        }
    }, [member[MEMBERS_SINGLE]]);

    return (
        <>
            <div className="profile-item">
                <div
                    className="profile-cover"
                    style={{
                        backgroundImage: `url(${profileCover})`,
                        backgroundSize: "contain",
                        height: 240
                    }}
                />
                <div className="profile-information">
                    <div
                        className="profile-pic"
                        style={{
                            backgroundImage: `url(${profilePic})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "#210053",
                            backgroundPosition: "center"
                        }}
                    />
                    <div className="profile-name">
                        <h4>William Smith</h4>
                        <p>Active 02 Minutes Ago</p>
                    </div>
                    <ul className="profile-contact">
                        <li>
                            <a href="#">
                                <div className="icon">
                                    <i className="icofont-user"/>
                                </div>
                                <div className="text">
                                    <p>Add Friends</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="icon">
                                    <i className="icofont-envelope"/>
                                </div>
                                <div className="text">
                                    <p>Public Message</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="icon">
                                    <i className="icofont-envelope"/>
                                </div>
                                <div className="text">
                                    <p>Private Message</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="profile-item d-none">
                <div className="lab-inner">
                    <div className="lab-thumb">
                        <a href="#">
                            <img src="images/profile/Profile.jpg" alt="profile"/>
                        </a>
                    </div>
                    <div className="lab-content">
                        <div className="profile-name">
                            <div className="p-name-content">
                                <h4>William Smith</h4>
                                <p>Active 02 Minutes Ago</p>
                            </div>

                            <div className="contact-button">
                                <button className="contact-btn">
                                    <i className="icofont-info-circle"/>
                                </button>
                            </div>
                        </div>
                        <ul className="profile-contact">
                            <li>
                                <a href="#">
                                    <div className="icon">
                                        <i className="icofont-user"/>
                                    </div>
                                    <div className="text">
                                        <p>Add Friends</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="icon">
                                        <i className="icofont-envelope"/>
                                    </div>
                                    <div className="text">
                                        <p>Publice Message</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="icon">
                                        <i className="icofont-envelope"/>
                                    </div>
                                    <div className="text">
                                        <p>Private Message</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY],
        member: state[MEMBERS_STATE_KEY]
    }
}

export default connect(
    mapStateToProps,
    null
)(ViewProfileBannerBlock);

