import React from "react";
import s from "./Sidebar.module.css"
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";

let Sidebar = () => {
    return (
        <aside className={s.sideBar}>
            <Logo />
            <ul>
                <li className={s.menuItem}>
                    <NavLink to="all_occurrences" activeClassName={s.active}>All Occurrences</NavLink>
                </li>
                <li className={s.menuItem}>
                    <NavLink to="settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;