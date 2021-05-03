import React from 'react';
import {getComponent, getRouteItem, getViewBlocksConfig} from "../../../library/helpers/page-helper";

const ViewBuilder = ({pageName}) => {
    const getRouteName = getRouteItem(pageName)?.name;
    return (
        <>
            {getRouteName && getViewBlocksConfig(getRouteName).map((section, index) => (
                <React.Fragment key={index}>
                    {getComponent(section.component)}
                </React.Fragment>
            ))}
        </>
    );
};

export default ViewBuilder;
