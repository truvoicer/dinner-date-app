import React from 'react';
import {getComponent, getRouteItem} from "../../../library/helpers/page-helper";
import AuthWrapper from "../../layout/auth/AuthWrapper";

const ViewBuilder = ({pageName}) => {
    const getRoute = getRouteItem(pageName);
    return (
        <AuthWrapper accessControlConfig={getRoute?.access_control}>
            {getRoute?.viewConfig?.blocks && getRoute.viewConfig.blocks.map((section, index) => (
                <AuthWrapper key={index} accessControlConfig={section?.access_control}>
                    {getComponent(section.component)}
                </AuthWrapper>
            ))}
        </AuthWrapper>
    );
};

export default ViewBuilder;
