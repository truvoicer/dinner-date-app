import React, {useEffect, useState} from 'react';
import FullWidthSection from "../../layout/sections/FullWidthSection";
import FullWidthListFilter from "../../forms/filters/FullWidthListFilter";
import {
    SESSION_AUTHENTICATED,
    SESSION_STATE_KEY,
    SESSION_USER
} from "../../../library/redux/constants/session-constants";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import store from "../../../library/redux/store";
import {MEMBERS_LIST_FETCH_REQUESTED} from "../../../library/redux/sagas/member/member-sagas";
import {connect} from "react-redux";
import {
    MEMBERS_SEARCH,
    MEMBERS_SEARCH_RESULTS,
    MEMBERS_STATE_KEY
} from "../../../library/redux/constants/members-constants";
import {getUserMediaValue} from "../../../library/helpers/user-helper";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {MEMBER_PROFILE_VIEW, PROFILE_VIEW} from "../../../config/constants/views/view-constants";
import Link from "next/link"

const MemberListBlock = ({session, members}) => {
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            const params = {
                limit: 50
            };
            store.dispatch({type: MEMBERS_LIST_FETCH_REQUESTED, payload: params})
        }
    }, [session[SESSION_AUTHENTICATED]]);

    const getMemberProfileUrl = (username) => {
        return getRouteItem(MEMBER_PROFILE_VIEW).href.replace("%s", username)
    }

    return (
        <FullWidthSection
            className={"member-page-section"}
            header={FullWidthListFilter}
            wrapperClassName={"member-wrapper"}
        >
            <>
                <ul className="member-info mb-4">
                    <li className="all-member">
                        <p>All Members </p>
                        <p>20 365 587</p>
                    </li>
                    <li className="member-cat">
                        <div className="custom-select right w-100">
                            <select name="member" id="member-cat" className="">
                                <option value="0">Newest Registerd</option>
                                <option value="1">Oldest</option>
                                <option value="2">Popular</option>
                                <option value="3">Most Active</option>
                            </select>
                        </div>
                    </li>
                </ul>

                <div
                    className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                    {members[MEMBERS_SEARCH][MEMBERS_SEARCH_RESULTS].map((member, memberIndex) => (
                        <div className="col" key={memberIndex}>
                            <div className="lab-item member-item style-1 style-2">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <img
                                            src={
                                                getUserMediaValue({
                                                    files: member?.files,
                                                    mediaCategory: "profile_pic"
                                                })
                                                ||
                                                "/images/member/01.jpg"
                                            }
                                            alt="member-img"
                                        />
                                    </div>
                                    <div className="lab-content">
                                        <h6>
                                            <Link href={getMemberProfileUrl(member.username)}>
                                                <a>{member.username}</a>
                                            </Link>
                                        </h6>
                                        <p>Active 1 Day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="paginations">
                    <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                        <li>
                            <a href="#"><i className="icofont-rounded-double-left"/></a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">...</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#"><i className="icofont-rounded-double-right"/></a>
                        </li>
                    </ul>
                </div>
            </>
        </FullWidthSection>
    );
};

function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY],
        members: state[MEMBERS_STATE_KEY]
    }
}

export default connect(
    mapStateToProps,
    null
)(MemberListBlock);
