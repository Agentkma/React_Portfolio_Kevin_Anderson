import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { content } from "../../Assets/Content";
import { mediaAnd } from "../../Theme";

// TODO add styles to match outer container

export const Main = styled.main`
    height: 75vh;
    /* background: papayawhip; */
    margin-left: 0;
    margin-top: 4rem;
    font-family: ${props => props.theme.fontFamilyPrimary};
`;

const InnerWrap = styled.div`
    padding: 100px 80px;
    /*iPhone Landscape Mode and Mediium Smart Phones*/
    ${mediaAnd.phoneLandscape`padding: 60px 10px;`};
`;

export const FirstFold = styled.div``;

class Layout extends Component {
    // TODO MOVE THIS STATE AND METHODS TO APP.JS and pass down to Layout
    state = {
        showWorksFilter: false
    };

    static defaultProps = {
        footer: content.footer.social
    };

    // ! Methods
    handleShowWorksFilter = () => {
        this.setState({ showWorksFilter: !this.state.showWorksFilter });
    };

    render() {
        return (
            <Fragment>
                <Navigation
                    toggleShowWorksFilter={this.handleShowWorksFilter}
                />
                <Main>
                    <InnerWrap>{this.props.children}</InnerWrap>
                </Main>
                <Footer content={this.props.footer} />
            </Fragment>
        );
    }
}

export default Layout;

// theme={this.props.theme}
