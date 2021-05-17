import FullWidthLayout from "../components/layout/layouts/FullWidthLayout";
import {HOME_VIEW} from "../config/constants/views/view-constants";
import ViewBuilder from "../components/views/builder/ViewBuilder";
import React from "react";

export default function Home() {
  return (
      <FullWidthLayout>
          <ViewBuilder pageName={HOME_VIEW} />
      </FullWidthLayout>
  )
}
