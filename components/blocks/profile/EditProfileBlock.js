import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY,
} from "../../../library/redux/constants/session-constants";
import store from "../../../library/redux/store";
import {SESSION_USER_FETCH_REQUESTED} from "../../../library/redux/sagas/session/session-sagas";
import {getUserProfileValue} from "../../../library/helpers/user-helper";
import EditableField from "../../forms/editable-fields/EditableField";
import {
    SECTION_FIELDS_LIST,
    SECTION_FIELDS_SINGLE,
} from "../../../config/api/editable-fields/editable-fields-constants";
import {editProfileFormFieldList} from "../../../config/api/editable-fields/lists/edit-profile-form-field-list";
import {getExtraFieldProps} from "../../../config/api/editable-fields/editable-fields-config";
import {isAuthenticated} from "../../../library/redux/actions/session-actions";
import SearchMembersBoxWidget from "../../widgets/search/SearchMembersBoxWidget";
import SuggestedMembersBoxWidget from "../../widgets/SuggestedMembersBoxWidget";
import ActiveGroupsBoxWidget from "../../widgets/ActiveGroupsBoxWidget";

const EditProfileBlock = ({session}) => {
    useEffect(() => {
        if (!isAuthenticated()) {
            return;
        }
        store.dispatch({type: SESSION_USER_FETCH_REQUESTED, payload: SESSION_USER_FETCH_REQUESTED})
    }, [session[SESSION_AUTHENTICATING], session[SESSION_AUTHENTICATED]]);

    // useEffect(() => {
    //     if (editable && isSessionUser && isSet(session[SESSION_USER].user_profile)) {
    //         setTargetUser(session[SESSION_USER]);
    //         setShowForm(true);
    //     }
    // }, [session[SESSION_USER].user_profile]);
    // //
    // useEffect(() => {
    //     if (!editable && !isSessionUser && !isObjectEmpty(members[MEMBERS_SINGLE])) {
    //         console.log(members[MEMBERS_SINGLE])
    //         setTargetUser(members[MEMBERS_SINGLE])
    //         setShowForm(true)
    //     }
    // }, [members[MEMBERS_SINGLE]]);
    // console.log(targetUser)
    return (
        <div>
            <div className="row">
                <div className="col-xl-8">
                    <article>
                        {editProfileFormFieldList(getUserProfileValue)
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
                                                    return (
                                                        <li key={sectionIndex}>
                                                            <p className="info-name">{section.label}</p>
                                                            <EditableField
                                                                className={section.className}
                                                                name={section.configName}
                                                                field={section.field}
                                                                value={section.value}
                                                                fieldComponent={section.fieldComponent}
                                                                {...getExtraFieldProps(section)}
                                                            />
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            }
                                            {block?.sectionType === SECTION_FIELDS_SINGLE && block.sections.map((section, sectionIndex) => (
                                                <React.Fragment key={sectionIndex}>
                                                    <EditableField
                                                        className={section.className}
                                                        name={section.configName}
                                                        fullWidth={section?.fullWidth || false}
                                                        field={section.field}
                                                        value={section.value}
                                                        fieldComponent={section.fieldComponent}
                                                        {...getExtraFieldProps(section)}
                                                    />
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
                        <SearchMembersBoxWidget/>
                        <SuggestedMembersBoxWidget/>
                        <ActiveGroupsBoxWidget/>
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
)(EditProfileBlock);
