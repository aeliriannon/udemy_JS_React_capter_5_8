import React from "react";

const HeaderMenuLink = ({ name }) => {
    return (
        <a href="." className="header__link">{name}</a>
    )
}

const AppHeaderNavigation = ({ data }) => {
    const headerMenuItems = data.map((item) => {
        return <HeaderMenuLink key={item.id} name={item.name} />
    });
    return (
        <nav className="header__links">
            {headerMenuItems}
        </nav>
    );
}

export default AppHeaderNavigation;