// ! External
import React, { Component } from "react";
import { func } from "prop-types";

//! Internal

import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

export class Navigation extends Component {
    state = {
        showNavDrawer: false
    };

    static propTypes = {
        click: func,
        toggleShowWorksFilter: func
    };

    navDrawerClosedHandler = () => {
        console.log("drawer close clicked");
        this.setState({ showNavDrawer: false });
    };

    navDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showNavDrawer: !prevState.showNavDrawer };
        });
    };

    render() {
        // const { theme } = this.props.theme;

        const navDrawer = this.state.showNavDrawer ? (
            <NavDrawer
                onClick={this.navDrawerClosedHandler}
                click={this.navDrawerClosedHandler}
            />
        ) : null;
        return (
            <div>
                <NavBar click={this.navDrawerToggleHandler} />
                {navDrawer}
            </div>
        );
    }
}

export default Navigation;
