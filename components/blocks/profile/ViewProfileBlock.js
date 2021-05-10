import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY,
} from "../../../library/redux/constants/session-constants";
import store from "../../../library/redux/store";
import {getSingleMemberProfileValue, getValueLabel} from "../../../library/helpers/user-helper";
import {
    SECTION_FIELDS_LIST,
    SECTION_FIELDS_SINGLE,
} from "../../../config/api/editable-fields/editable-fields-constants";
import {editProfileFormFieldList} from "../../../config/api/editable-fields/lists/edit-profile-form-field-list";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import {MEMBERS_STATE_KEY} from "../../../library/redux/constants/members-constants";
import {MEMBERS_SINGLE_FETCH_REQUESTED} from "../../../library/redux/sagas/member/member-sagas";
import SearchMembersBoxWidget from "../../widgets/search/SearchMembersBoxWidget";
import SuggestedMembersBoxWidget from "../../widgets/SuggestedMembersBoxWidget";
import ActiveGroupsBoxWidget from "../../widgets/ActiveGroupsBoxWidget";

const ViewProfileBlock = ({session, members, username = null}) => {
    useEffect(() => {
        if (!isAuthenticated()) {
            return;
        }
        store.dispatch({type: MEMBERS_SINGLE_FETCH_REQUESTED, payload: {username: username}})
    }, [session[SESSION_AUTHENTICATING], session[SESSION_AUTHENTICATED]]);

    return (
        <div>
            <div className="row">
                <div className="col-xl-8">
                    <article>
                        {editProfileFormFieldList(getSingleMemberProfileValue)
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
                                                {block.sections.map((section, sectionIndex) => {
                                                    const labelValues = getValueLabel({field: section.field, value: section.value});
                                                    return (
                                                        <li key={sectionIndex}>
                                                            <p className="info-name">{section.label}</p>
                                                            <div className={`${labelValues.length > 1? "d-flex" : ""}`}>
                                                                {labelValues.map((value, index) => {
                                                                    return (
                                                                        <p key={index} className={`info-details`}>
                                                                            {value || ""}
                                                                        </p>
                                                                    )
                                                                })}
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            }
                                            {block?.sectionType === SECTION_FIELDS_SINGLE && block.sections.map((section, sectionIndex) => (
                                                <React.Fragment key={sectionIndex}>
                                                    <p className="info-details">{section.value}</p>
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
                        <SearchMembersBoxWidget />
                        <SuggestedMembersBoxWidget />
                        <ActiveGroupsBoxWidget />
                    </aside>
                </div>
            </div>
        </div>
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
)(ViewProfileBlock);
