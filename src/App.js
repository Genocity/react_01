import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {addPost} from "./state";
import PageWrapper from "./components/PageWrapper/PageWrapper";

function App(props) {
    return (
        <div>
            <Sidebar state={props.state.sideBar}/>
            <PageWrapper state={props.state.pageWrapper} addPost={addPost}/>
        </div>
    );
}

export default App;