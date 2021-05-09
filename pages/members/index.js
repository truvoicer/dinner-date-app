import React from 'react';
import FullWidthLayout from "../../components/layout/FullWidthLayout";
import MemberListView from "../../components/views/members/MemberListView";

const MemberPage = () => {
    return (
        <FullWidthLayout>
            <MemberListView />
        </FullWidthLayout>
    );
};

export default MemberPage;
