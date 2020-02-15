import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import PageWrapper from "./components/PageWrapper/PageWrapper";

function App(props) {
    return (
        <div>
            <Sidebar />
            <PageWrapper state={props.state.pageWrapper}/>
        </div>
    );
}

export default App;