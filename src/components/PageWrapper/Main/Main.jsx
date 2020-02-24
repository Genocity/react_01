import React from "react";

let Main = (props) => {
    let items = props.items.map(item => {
        return <li>{item}</li>
    });

    return (
        <ul>
            {items}
        </ul>
    );
};

export default Main;