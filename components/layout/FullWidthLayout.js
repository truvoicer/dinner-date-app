import React from 'react';
import Header from "./headers/Header";
import Footer from "./footers/Footer";

const FullLayout = ({children}) => {
    return (
        <div className={"dinner-date-app"}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FullLayout;
