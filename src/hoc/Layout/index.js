import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";

const Main = styled.main`
    padding: 4em;
    background: papayawhip;
`;

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Main>{this.props.children}</Main>
            </Fragment>
        );
    }
}

export default Layout;
