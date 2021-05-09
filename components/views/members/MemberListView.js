import React from 'react';
import ViewBuilder from "../builder/ViewBuilder";
import {ALL_MEMBERS_VIEW, PROFILE_VIEW} from "../../../config/constants/views/view-constants";

const MemberListView = () => {
    return (
        <>
            <ViewBuilder pageName={ALL_MEMBERS_VIEW} />
        </>
    );
};

export default MemberListView;
