import React from "react";
import s from "./Sidebar.module.css"
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";

let Sidebar = (props) => {
    let items = props.items.map(item => {
        return (
            <li className={s.menuItem}>
                <NavLink to={item.link} activeClassName={s.active}>
                    {item.name}
                </NavLink>
            </li>
        )
    });

    return (
        <aside className={s.sideBar}>
            <Logo/>
            <ul>
                {items}
            </ul>
        </aside>
    );
};

export default Sidebar;