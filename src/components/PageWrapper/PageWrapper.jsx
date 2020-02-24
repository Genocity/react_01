import React from "react";
import Header from "./Header/Header";
import s from "./PageWrapper.module.css"
import {Route} from "react-router-dom";
import MainContainer from "./Main/MainContainer";
import SettingsContainer from "./Settings/SettingsContainer";
import TestContainer from "./Test/TestContainer";

let PageWrapper = () => {

    return (
        <div className={s.pageWrapper}>
            <Header/>
            <Route
                path="/main"
                render={() => <MainContainer/>}
            />
            <Route
                path="/settings"
                render={() => <SettingsContainer/>}
            />
            <Route
                path="/test"
                render={() => <TestContainer/>}
            />
        </div>
    );
};

export default PageWrapper;