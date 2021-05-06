import React from 'react';
import ViewBuilder from "../builder/ViewBuilder";
import {PROFILE_VIEW} from "../../../config/constants/views/view-constants";

const ProfileView = () => {
    return (
        <>
            <ViewBuilder pageName={PROFILE_VIEW} />
        </>
    );
};

export default ProfileView;
