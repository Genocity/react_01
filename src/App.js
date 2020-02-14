import React from 'react';
import './App.css';
import Library from "./components/Library/Library";

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
  return (
    <div className="App">
        <Library props={lib1Props}/>
        <Library props={lib2Props}/>
    </div>
  );
}

export default App;
