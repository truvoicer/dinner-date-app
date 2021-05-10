import React from 'react';
import FullWidthLayout from "../../../components/layout/FullWidthLayout";
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
