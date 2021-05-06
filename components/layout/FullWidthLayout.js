import React, {useEffect} from 'react';
import Header from "./headers/Header";
import Footer from "./footers/Footer";
import {useRouter} from "next/router";
import {SET_SESSION_PAGE_PATH} from "../../library/redux/sagas/session/session-saga";
import store from "../../library/redux/store";

const FullLayout = ({children}) => {
    const router = useRouter();
    useEffect(() => {
        store.dispatch({type: SET_SESSION_PAGE_PATH, path: router.asPath})
    }, [router.asPath]);

    return (
        <div className={"dinner-date-app"}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FullLayout;
