import React from 'react';
import './App.css';
import Library from "./components/Library/Library";
import {BrowserRouter, Route} from "react-router-dom";
import Books from "./components/Books/Books";

function App() {
    let firstName = "Community";
    let secondName = "Library";
    /*    let lib1Props = {
            "name": `${firstName} + ${secondName}`,
            "color": "blue"
        };
        let lib2Props = {
            "name": `${firstName} + ${secondName} #2`,
            "color": "blue"
        };*/
    let libsProps = [
        {
            "name": `${firstName} + ${secondName}`,
            "color": "blue"
        },
        {
            "name": `${firstName} + ${secondName} #2`,
            "color": "blue"
        }

    ];
    let libraries = libsProps.map(item => {
        return <Library props={item.name}/>
    });
    console.log(window.history);

    return (
        <BrowserRouter>
            <div className="App">
                {/*<Route
                    path="/lib"
                    component={() => <Library props={lib2Props}/>}
                />
                <Route path="/books" component={Books}/>*/}
                {libraries}
            </div>
        </BrowserRouter>
    );
}

export default App;
