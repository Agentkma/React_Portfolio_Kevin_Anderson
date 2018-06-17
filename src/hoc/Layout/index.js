import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import { Rotate } from "../../Theme/animations";

const Main = styled.main`
    padding: 4rem;
    height: 75vh;
    background: papayawhip;
`;

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Main>
                    {this.props.children}
                    <Rotate>
                        &lt; <span role="img">💅 </span> &gt;
                    </Rotate>
                </Main>
            </Fragment>
        );
    }
}

export default Layout;

// theme={this.props.theme}
