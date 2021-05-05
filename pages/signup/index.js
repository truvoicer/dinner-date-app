import React from 'react';
import FullWidthLayout from "../../components/layout/FullWidthLayout";
import ViewBuilder from "../../components/views/builder/ViewBuilder";
import {SIGNUP_VIEW} from "../../config/constants/views/view-constants";

const SignupPage = () => {
    return (
        <FullWidthLayout>
            <ViewBuilder pageName={SIGNUP_VIEW} />
        </FullWidthLayout>
    );
};

export default SignupPage;
