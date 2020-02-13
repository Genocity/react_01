import React from "react";
import Books from "./Books";
import library from "./Library.module.css";

const Library = () => {
    console.log(library.item);
    return(
        <div>
            <Books />
            <Books />
            <h2>Librarians</h2>
            <li className={library.item}>Katya</li>
            <li className={library.item}>Dasha</li>
            <li className={library.director}>Sergei</li>
        </div>
    );
};

export default Library;