import React from "react";

let Settings = (props) => {
    let items = props.state.items.map(item => {
        return <li>{item}</li>
    });

    return (
        <ul>
            {items}
        </ul>
    );
};

export default Settings;