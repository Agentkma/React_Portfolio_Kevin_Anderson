import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Nav from "../../Components/Navigation";
import NavDrawer from "../../Components/Navigation/NavDrawer";

const Main = styled.main`
    padding: 4em;
    background: papayawhip;
`;

class Layout extends Component {
    state = {
        showNavDrawer: false
    };

    navDrawerClosedHandler = () => {
        this.setState({ showNavDrawer: false });
    };

    navDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showNavDrawer: !prevState.showNavDrawer };
        });
    };

    render() {
        return (
            <Fragment>
                <Nav drawerToggleClicked={this.navDrawerToggleHandler} />
                {/* <NavDrawer
                    open={this.state.showNavDrawer}
                    closed={this.navDrawerClosedHandler}
                /> */}
                <Main>{this.props.children}</Main>
            </Fragment>
        );
    }
}

export default Layout;
