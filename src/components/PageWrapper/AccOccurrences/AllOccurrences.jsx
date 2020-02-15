import React from "react";

let AllOccurrences = (props) => {
    let items = props.state.items.map(item => {
        return <li>{item}</li>
    });

    return (
        <ul>
            {items}
        </ul>
    );
};

export default AllOccurrences;