import React from 'react';
import {getComponent, getRouteItem} from "../../../library/helpers/page-helper";
import AuthWrapper from "../../layout/auth/AuthWrapper";

const ViewBuilder = (props) => {
    const getRoute = getRouteItem(props.pageName);
    return (
        <AuthWrapper accessControlConfig={getRoute?.access_control}>
            {getRoute?.viewConfig?.blocks && getRoute.viewConfig.blocks.map((section, index) => (
                <AuthWrapper key={index} accessControlConfig={section?.access_control}>
                    {getComponent({
                        component: section.component,
                        props: {
                            ...section.props,
                            ...props
                        }
                    })}
                </AuthWrapper>
            ))}
        </AuthWrapper>
    );
};

export default ViewBuilder;
