import React from "react";
import Header from "./Header/Header";
import s from "./PageWrapper.module.css"
import {Route} from "react-router-dom";
import Main from "./Main/Main";
import Settings from "./Settings/Settings";
import Test from "./Test/Test";

let PageWrapper = (props) => {
    debugger;
    // tried to map Render
    /*let pages = Object.values(props.state);
    pages.shift();
    console.log(
        pages.map((item, index) => {
            let jsxItem = `<${Object.keys(item)[index]} state={${item}/>`;
            return <Route
                path={`${item.path}`}
                render={() => <div>{jsxItem}</div>}/>
        })
    );
    console.dir(
        <Route
            path="/all_occurrences"
            render={() => <AllOccurrences state={props.state.allOccurrences}/>}
        />
    );*/
    return (
        <div className={s.pageWrapper}>
            <Header state={props.state.header}/>
            <Route
                path="/main"
                render={() => <Main state={props.state.main}/>}
            />
            <Route
                path="/settings"
                render={() => <Settings state={props.state.settings}/>}
            />
            <Route
                path="/test"
                render={() => <Test
                    state={props.state.test}
                    dispatch={props.dispatch}
                />}
            />
        </div>
    );
};

export default PageWrapper;