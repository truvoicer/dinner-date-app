import React from 'react';
import ViewBuilder from "../builder/ViewBuilder";
import {LOGIN_VIEW} from "../../../config/views/constants/view-constants";

const AuthLoginView = () => {
    return (
        <>
            <ViewBuilder pageName={LOGIN_VIEW} />
        </>
    );
};

export default AuthLoginView;
