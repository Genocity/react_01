import React from "react";
import s from "./Header.module.css";

let Header = (props) => {
    return (
        <header className={s.header}>
            {props.state.text}
        </header>
    );
};

export default Header;