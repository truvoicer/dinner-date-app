import React from 'react';
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import GlobalLayout from "./global/GlobalLayout";

const FullLayout = ({children}) => {

    return (
        <GlobalLayout>
            <div className={"dinner-date-app"}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </GlobalLayout>
    );
};
export default FullLayout;
