import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import PageWrapper from "./components/PageWrapper/PageWrapper";

function App(props) {
    return (
        <div>
            <Sidebar state={props.state.sideBar}/>
            <PageWrapper
                state={props.state.pageWrapper}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;