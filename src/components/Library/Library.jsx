import React from "react";
import Books from "../Books/Books";
import library from "./Library.module.css";

const Library = (props) => {
    console.log(props);
    return(
        <div>
            <h2>{props.props.name}</h2>
            <Books />
            <Books />
            <h3>Librarians</h3>
            <li className={library.item}>Katya</li>
            <li className={library.item}>Dasha</li>
            <li className={library.director}>Sergei</li>
        </div>
    );
};

export default Library;