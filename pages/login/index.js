import React from 'react';
import FullWidthLayout from "../../components/layout/FullWidthLayout";
import AuthLoginView from "../../components/views/auth/AuthLoginView";

const LoginPage = () => {
    return (
        <FullWidthLayout>
            <AuthLoginView />
        </FullWidthLayout>
    );
};

export default LoginPage;
