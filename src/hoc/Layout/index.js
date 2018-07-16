// ! External
import React, { Component, Fragment } from "react";

// ! Internal
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { content } from "../../Assets/Content";
import { media, mediaAnd } from "../../Theme";

// TODO add styles to match outer container

class Layout extends Component {
    static propTypes = {};
    static defaultProps = {
        footer: content.footer.social
    };

    render() {
        const { footer } = this.props;

        return (
            <Fragment>
                <Navigation />
                <Main>
                    <InnerWrap>{this.props.children}</InnerWrap>
                </Main>
                <Footer content={footer} />
            </Fragment>
        );
    }
}

export default Layout;

export const Main = styled.main`
    height: 75vh;
    margin-left: 0;
    font-family: ${props => props.theme.fontFamilyPrimary};
`;

const InnerWrap = styled.div`
    box-sizing: border-box;
    ${mediaAnd.phoneLandscape`padding: 60px 10px;`};
    ${media.desktop`padding: 100px 80px;`};
`;

export const FirstFold = styled.div``;

// theme={this.props.theme}
