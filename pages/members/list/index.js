import React from 'react';
import FullWidthLayout from "../../../components/layout/FullWidthLayout";
import MemberListView from "../../../components/views/members/MemberListView";
import {ALL_MEMBERS_VIEW} from "../../../config/constants/views/view-constants";
import ViewBuilder from "../../../components/views/builder/ViewBuilder";

const MemberListPage = () => {
    return (
        <FullWidthLayout>
            <ViewBuilder pageName={ALL_MEMBERS_VIEW} />
        </FullWidthLayout>
    );
};

export default MemberListPage;
