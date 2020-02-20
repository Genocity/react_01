import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import PageWrapper from "./components/PageWrapper/PageWrapper";

function App(props) {
    debugger;
    return (
        <div>
            <Sidebar state={props.state.sidebar}/>
            <PageWrapper
                state={props.state.pageWrapper}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;