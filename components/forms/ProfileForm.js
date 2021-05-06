import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EditableTextField from "./editable-fields/EditableTextField";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY, SESSION_USER
} from "../../library/redux/constants/session-constants";
import store from "../../library/redux/store";
import {SESSION_USER_FETCH_REQUESTED} from "../../library/redux/sagas/session/session-saga";
import {getUserProfileValue} from "../../library/helpers/user-helper";

const ProfileForm = ({session}) => {
    useEffect(() => {
        store.dispatch({type: SESSION_USER_FETCH_REQUESTED, payload: SESSION_USER_FETCH_REQUESTED})
    }, [session[SESSION_AUTHENTICATING], session[SESSION_AUTHENTICATED]]);

    return (
        <div>
            <div className="row">
                <div className="col-xl-8">
                    <article>
                        <div className="info-card mb-20">
                            <div className="info-card-title">
                                <h6>Base Info</h6>
                            </div>
                            <div className="info-card-content">
                                <ul className="info-list">
                                    <li>
                                        <p className="info-name">First Name</p>
                                        <EditableTextField
                                            element={"p"}
                                            className={"info-details"}
                                            name={"first_name"}
                                            value={getUserProfileValue("first_name")}
                                        />
                                    </li>
                                    <li>
                                        <p className="info-name">I'm a</p>
                                        <p className="info-details">Woman</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Loking for a</p>
                                        <p className="info-details">Men</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Marital Status</p>
                                        <p className="info-details">Single</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Age</p>
                                        <p className="info-details">36</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Date of Birth</p>
                                        <p className="info-details">27-02-1996</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Address</p>
                                        <p className="info-details">Streop Rd, Peosur, Inphodux,
                                            USA.</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="info-card mb-20">
                            <div className="info-card-title">
                                <h6>Myself Summary</h6>
                            </div>
                            <div className="info-card-content">
                                <p>Collaboratively innovate compelling mindshare after
                                    prospective partnerships Competently sereiz long-term
                                    high-impact internal or "organic" sources via user friendly
                                    strategic themesr areas creat Dramatically coordinate
                                    premium partnerships rather than standards compliant
                                    technologies ernd Dramatically matrix ethical collaboration
                                    and idea-sharing through opensource methodologies and
                                    Intrinsicly grow collaborative platforms vis-a-vis effective
                                    scenarios. Energistically strategize cost effective ideas
                                    before the worke unde.</p>
                            </div>
                        </div>
                        <div className="info-card mb-20">
                            <div className="info-card-title">
                                <h6>Looking For</h6>
                            </div>
                            <div className="info-card-content">
                                <ul className="info-list">
                                    <li>
                                        <p className="info-name">Things I'm looking for</p>
                                        <p className="info-details">I want a funny person</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Whatever I like</p>
                                        <p className="info-details">I like to travel a lot</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="info-card mb-20">
                            <div className="info-card-title">
                                <h6>Lifestyle</h6>
                            </div>
                            <div className="info-card-content">
                                <ul className="info-list">
                                    <li>
                                        <p className="info-name">Interest</p>
                                        <p className="info-details">Dogs,Cats</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Favorite vocations spot</p>
                                        <p className="info-details">Maldives, Bangladesh</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Looking for</p>
                                        <p className="info-details">Serious Relationshiop,Affair</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Smoking</p>
                                        <p className="info-details">Casual Smoker</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Language</p>
                                        <p className="info-details">English, French, Italian</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-card-title">
                                <h6>Physical info</h6>
                            </div>
                            <div className="info-card-content">
                                <ul className="info-list">
                                    <li>
                                        <p className="info-name">Height</p>
                                        <p className="info-details">5'8 ft</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Weight</p>
                                        <p className="info-details">72 kg</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Hair Color</p>
                                        <p className="info-details">Black</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Eye Color</p>
                                        <p className="info-details">Brown</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Body Type</p>
                                        <p className="info-details">Tall</p>
                                    </li>
                                    <li>
                                        <p className="info-name">Ethnicity</p>
                                        <p className="info-details">Middle Eastern</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
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
                                                    <img src="/images/widget/01.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/02.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/03.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/04.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/05.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/06.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/07.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/08.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="image-thumb">
                                                <a href="#">
                                                    <img src="/images/widget/09.jpg" alt="img" />
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
                                                    <li><img src="/images/group/group-mem/01.png" alt="member-img"/></li>
                                                    <li><img src="/images/group/group-mem/02.png" alt="member-img"/></li>
                                                    <li><img src="/images/group/group-mem/03.png" alt="member-img"/></li>
                                                    <li><img src="/images/group/group-mem/04.png" alt="member-img"/></li>
                                                    <li><img src="/images/group/group-mem/05.png" alt="member-img"/></li>
                                                    <li><img src="/images/group/group-mem/06.png" alt="member-img"/></li>
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
)(ProfileForm);
