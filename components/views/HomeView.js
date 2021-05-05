import React from 'react';
import ViewBuilder from "./builder/ViewBuilder";
import {HOME_VIEW} from "../../config/constants/views/view-constants";

const HomeView = ({children}) => {
    return (
        <>
            <ViewBuilder pageName={HOME_VIEW} />
        </>
    )
};

export default HomeView;
