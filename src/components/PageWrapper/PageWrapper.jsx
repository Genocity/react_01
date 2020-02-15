import React from "react";
import Header from "./Header/Header";
import s from "./PageWrapper.module.css"
import {Route} from "react-router-dom";
import AllOccurrences from "./AccOccurrences/AllOccurrences";
import Settings from "./Settings/Settings";

let PageWrapper = (props) => {

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
                path="/all_occurrences"
                render={() => <AllOccurrences state={props.state.allOccurrences}/>}
            />
            <Route
                path="/settings"
                render={() => <Settings state={props.state.settings}/>}
            />
        </div>
    );
};

export default PageWrapper;