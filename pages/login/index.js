import React from 'react';
import FullWidthLayout from "../../components/layout/layouts/FullWidthLayout";
import {LOGIN_VIEW} from "../../config/constants/views/view-constants";
import ViewBuilder from "../../components/views/builder/ViewBuilder";

const LoginPage = () => {
    return (
        <FullWidthLayout>
            <ViewBuilder pageName={LOGIN_VIEW} />
        </FullWidthLayout>
    );
};

export default LoginPage;
