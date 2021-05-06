import React from 'react';

const ImageBannerBlock = () => {
    return (
        <>
            <div className="profile-item">
                <div className="profile-cover">
                    <img src="/images/profile/cover.jpg" alt="cover-pic" />
                        <div className="edit-photo custom-upload">
                            <div className="file-btn">
                                <i className="icofont-camera"/>
                                Edit Photo
                            </div>
                            <input type="file" />
                        </div>
                </div>
                <div className="profile-information">
                    <div className="profile-pic">
                        <img src="images/profile/Profile.jpg" alt="DP" />
                            <div className="custom-upload">
                                <div className="file-btn">
                                        <span className="d-none d-lg-inline-block">
                                            <i className="icofont-camera"/>
                                            Edit
                                        </span>
                                    <span className="d-lg-none mr-0">
                                        <i className="icofont-plus"/>
                                    </span>
                                </div>
                                <input type="file" />
                            </div>
                    </div>
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
                            <img src="images/profile/Profile.jpg" alt="profile" />
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

export default ImageBannerBlock;
