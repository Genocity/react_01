import React from 'react';
import './App.css';
import Library from "./components/Library/Library";
import {BrowserRouter, Route} from "react-router-dom";
import Books from "./components/Books/Books";

function App() {
    let firstName = "Community";
    let secondName = "Library";
    let lib1Props = {
        "name": `${firstName} + ${secondName}`,
        "color": "blue"
    };
    let lib2Props = {
        "name": `${firstName} + ${secondName} #2`,
        "color": "blue"
    };
    console.log(window.history);

    return (
        <BrowserRouter>
            <div className="App">
                <Route
                    path="/lib"
                    component={() => <Library props={lib2Props}/>}
                />
                <Route path="/books" component={Books}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
