import React from 'react';
import FullWidthLayout from "../../../components/layout/layouts/FullWidthLayout";
import {PROFILE_VIEW} from "../../../config/constants/views/view-constants";
import ViewBuilder from "../../../components/views/builder/ViewBuilder";

const GalleryPage = () => {
    return (
        <FullWidthLayout>
            <ViewBuilder  pageName={PROFILE_VIEW} />
        </FullWidthLayout>
    );
};

export default GalleryPage;
