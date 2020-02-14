import React from "react";
import books from "./Books.module.css";

const Books = () => {
    return (
        <ul>
            <li className={books.item}>Antifragile</li>
            <li className={books.item}>Pale fire</li>
            <li className={books.item}>Old man and sea</li>
            <li className={books.item}>1984</li>
            <li className={books.item}>The Prince</li>
        </ul>
    );
};

export default Books;