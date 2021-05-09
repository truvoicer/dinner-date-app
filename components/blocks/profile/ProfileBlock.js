import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import EditableTextField from "../../forms/editable-fields/EditableTextField";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY, SESSION_USER
} from "../../../library/redux/constants/session-constants";
import store from "../../../library/redux/store";
import {SESSION_USER_FETCH_REQUESTED} from "../../../library/redux/sagas/session/session-sagas";
import {getUserProfileValue} from "../../../library/helpers/user-helper";
import {apiConfig} from "../../../config/api/config";
import {buildRequestUrl} from "../../../library/api/helpers/api-helpers";
import EditableField from "../../forms/editable-fields/EditableField";
import {
    SECTION_FIELDS_LIST,
    SECTION_FIELDS_SINGLE,
    USER_PROFILE_UPDATE
} from "../../../config/api/editable-fields/editable-fields-constants";
import EditableSelectField from "../../forms/editable-fields/EditableSelectField";
import {isSet, uCaseFirst} from "../../../library/helpers/utils-helper";
import EditableDateField from "../../forms/editable-fields/EditableDateField";
import moment from "moment";
import EditableTextAreaField from "../../forms/editable-fields/EditableTextAreaField";
import {profileFormFieldList} from "../../../config/api/editable-fields/lists/profile-form-field-list";
import {getExtraFieldProps} from "../../../config/api/editable-fields/editable-fields-config";

const ProfileBlock = ({session}) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        store.dispatch({type: SESSION_USER_FETCH_REQUESTED, payload: SESSION_USER_FETCH_REQUESTED})
    }, [session[SESSION_AUTHENTICATING], session[SESSION_AUTHENTICATED]]);
    useEffect(() => {
        if (isSet(session[SESSION_USER].user_profile)) {
            console.log(session[SESSION_USER].user_profile)
            setShowForm(true)
        }
    }, [session[SESSION_USER].user_profile]);

    return (
        <div>
            <div className="row">
                <div className="col-xl-8">
                    <article>
                        {showForm && profileFormFieldList(getUserProfileValue)
                            .map((block, blockIndex) => {
                                switch (block?.sectionType) {
                                    case "SECTION_FIELDS_LIST":

                                }
                                return (
                                    <div key={blockIndex} className="info-card mb-20">
                                        <div className="info-card-title">
                                            <h6>{block.title}</h6>
                                        </div>
                                        <div className="info-card-content">
                                            {block?.sectionType === SECTION_FIELDS_LIST &&
                                            <ul className="info-list">
                                                {block.sections.map((section, sectionIndex) => (
                                                    <li key={sectionIndex}>
                                                        <p className="info-name">{section.label}</p>
                                                        {isSet(section?.configName)
                                                            ?
                                                            <EditableField
                                                                className={section.className}
                                                                name={section.configName}
                                                                field={section.field}
                                                                value={section.value}
                                                                fieldComponent={section.fieldComponent}
                                                                {...getExtraFieldProps(section)}
                                                            />
                                                            :
                                                            <p className="info-details">{section.value}</p>
                                                        }
                                                    </li>
                                                ))}
                                            </ul>
                                            }
                                            {block?.sectionType === SECTION_FIELDS_SINGLE && block.sections.map((section, sectionIndex) => (
                                                <React.Fragment key={sectionIndex}>
                                                    {isSet(section?.configName)
                                                        ?
                                                        <EditableField
                                                            className={section.className}
                                                            name={section.configName}
                                                            fullWidth={section?.fullWidth || false}
                                                            field={section.field}
                                                            value={section.value}
                                                            fieldComponent={section.fieldComponent}
                                                            {...getExtraFieldProps(section)}
                                                        />
                                                        :
                                                        <p className="info-details">{section.value}</p>
                                                    }
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                    </article>
                </div>

                <div className="col-xl-4">
                    <aside className="mt-5 mt-xl-0">
                        <div className="widget search-widget">
                            <div className="widget-inner">
                                <div className="widget-title">
                                    <h5>Filter Search Member</h5>
                                </div>
                                <div className="widget-content">
                                    <p>Serious Dating With TuruLav Your Perfect
                                        Match is Just a Click Away.</p>
                                    <form action="/" className="banner-form">
                                        <div className="gender">
                                            <div className="custom-select right w-100">
                                                <select className="">
                                                    <option value="0">I am a</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="person">
                                            <div className="custom-select right w-100">
                                                <select className="">
                                                    <option value="0">Looking for</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="age">
                                            <div
                                                className="right d-flex justify-content-between w-100">
                                                <div className="custom-select">
                                                    <select>
                                                        <option value="1">18</option>
                                                        <option value="2">19</option>
                                                        <option value="3">20</option>
                                                        <option value="4">21</option>
                                                        <option value="5">22</option>
                                                        <option value="6">23</option>
                                                        <option value="7">24</option>
                                                        <option value="8">25</option>
                                                        <option value="9">26</option>
                                                        <option value="10">27</option>
                                                        <option value="11">28</option>
                                                        <option value="13">29</option>
                                                        <option value="14">30</option>
                                                    </select>
                                                </div>

                                                <div className="custom-select">
                                                    <select>
                                                        <option value="1">36</option>
                                                        <option value="2">19</option>
                                                        <option value="3">20</option>
                                                        <option value="4">21</option>
                                                        <option value="5">22</option>
                                                        <option value="6">23</option>
                                                        <option value="7">24</option>
                                                        <option value="8">25</option>
                                                        <option value="9">26</option>
                                                        <option value="10">27</option>
                                                        <option value="11">28</option>
                                                        <option value="13">29</option>
                                                        <option value="14">30</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="city">
                                            <div className="custom-select right w-100">
                                                <select className="">
                                                    <option value="0">Choose Your Country
                                                    </option>
                                                    <option value="1">USA</option>
                                                    <option value="2">UK</option>
                                                    <option value="3">Spain</option>
                                                    <option value="4">Brazil</option>
                                                    <option value="5">France</option>
                                                    <option value="6">Newzeland</option>
                                                    <option value="7">Australia</option>
                                                    <option value="8">Bangladesh</option>
                                                    <option value="9">Turki</option>
                                                    <option value="10">Chine</option>
                                                    <option value="11">India</option>
                                                    <option value="12">Canada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="interest">
                                            <div className="custom-select right w-100">
                                                <select className="">
                                                    <option value="0">Your Interests
                                                    </option>
                                                    <option value="1">Gaming</option>
                                                    <option value="2">Fishing</option>
                                                    <option value="3">Skydriving</option>
                                                    <option value="4">Swimming</option>
                                                    <option value="5">Racing</option>
                                                    <option value="6">Hangout</option>
                                                    <option value="7">Tranvelling</option>
                                                    <option value="8">Camping</option>
                                                    <option value="9">Touring</option>
                                                    <option value="10">Acting</option>
                                                    <option value="11">Dancing</option>
                                                    <option value="12">Singing</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button className="">Find Your Partner</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="widget like-member">
                            <div className="widget-inner">
                                <div className="widget-title">
                                    <h5>you may like</h5>
                                </div>
                                <div className="widget-content">
                                    <div className="row row-cols-3 row-cols-sm-auto g-3">
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/01.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/02.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/03.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/04.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/05.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/06.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/07.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/08.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/09.jpg" alt="img"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget active-group">
                            <div className="widget-inner">
                                <div className="widget-title">
                                    <h5>join the group</h5>
                                </div>
                                <div className="widget-content">
                                    <div className="group-item lab-item">
                                        <div
                                            className="lab-inner d-flex flex-wrap align-items-center">
                                            <div className="lab-content w-100">
                                                <h6>Active Group A1</h6>
                                                <p>Colabors atively fabcate best breed and
                                                    apcations through visionary</p>
                                                <ul className="img-stack d-flex">
                                                    <li><img src="/images/group/group-mem/01.png" alt="member-img"/>
                                                    </li>
                                                    <li><img src="/images/group/group-mem/02.png" alt="member-img"/>
                                                    </li>
                                                    <li><img src="/images/group/group-mem/03.png" alt="member-img"/>
                                                    </li>
                                                    <li><img src="/images/group/group-mem/04.png" alt="member-img"/>
                                                    </li>
                                                    <li><img src="/images/group/group-mem/05.png" alt="member-img"/>
                                                    </li>
                                                    <li><img src="/images/group/group-mem/06.png" alt="member-img"/>
                                                    </li>
                                                    <li className="bg-theme">12+</li>
                                                </ul>
                                                <div className="test">
                                                    <a href="profile.html" className="lab-btn">
                                                        <i className="icofont-users-alt-5"/>
                                                        View Group
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-item lab-item">
                                        <div
                                            className="lab-inner d-flex flex-wrap align-items-center">
                                            <div className="lab-content w-100">
                                                <h6>Active Group A2</h6>
                                                <p>
                                                    Colabors atively fabcate best breed and apcations through visionary
                                                </p>
                                                <ul className="img-stack d-flex">
                                                    <li>
                                                        <img src="/images/group/group-mem/01.png" alt="member-img"/>
                                                    </li>
                                                    <li>
                                                        <img src="/images/group/group-mem/02.png" alt="member-img"/>
                                                    </li>
                                                    <li>
                                                        <img src="/images/group/group-mem/03.png" alt="member-img"/>
                                                    </li>
                                                    <li>
                                                        <img src="/images/group/group-mem/04.png" alt="member-img"/>
                                                    </li>
                                                    <li>
                                                        <img src="/images/group/group-mem/05.png" alt="member-img"/>
                                                    </li>
                                                    <li>
                                                        <img src="/images/group/group-mem/06.png" alt="member-img"/>
                                                    </li>
                                                    <li className="bg-theme">16+</li>
                                                </ul>
                                                <div className="test">
                                                    <a href="profile.html" className="lab-btn">
                                                        <i className="icofont-users-alt-5"/>
                                                        View Group
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY]
    }
}

export default connect(
    mapStateToProps,
    null
)(ProfileBlock);
