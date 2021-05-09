import React from 'react';
import FullWidthLayout from "../../components/layout/FullWidthLayout";
import {PROFILE_VIEW} from "../../config/constants/views/view-constants";
import ViewBuilder from "../../components/views/builder/ViewBuilder";

const ProfilePage = () => {
    return (
        <FullWidthLayout>
            <ViewBuilder editable={true} pageName={PROFILE_VIEW} />
        </FullWidthLayout>
    );
};

export default ProfilePage;
