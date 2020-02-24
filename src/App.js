import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper/PageWrapper";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

function App() {
    return (
        <div>
            <SidebarContainer/>
            <PageWrapper/>
        </div>
    );
}

export default App;