import  { useState } from "react";

import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

export const Navigation = () => {
    const [showNavDrawer, setShowNavDrawer] = useState(false);

    const navDrawerToggleHandler = () => {
        setShowNavDrawer((prevState) => !prevState);
    };
    const navDrawer = showNavDrawer ? (
        <NavDrawer click={navDrawerToggleHandler} />
    ) : null;

    return (
        <div>
            <NavBar click={navDrawerToggleHandler} />
            {navDrawer}
        </div>
    );
};

export default Navigation;
