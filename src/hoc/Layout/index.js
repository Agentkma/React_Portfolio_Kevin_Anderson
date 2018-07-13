// ! External
import React, { Component, Fragment } from "react";
import { bool, func } from "prop-types";

// ! Internal
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { content } from "../../Assets/Content";
import { mediaAnd } from "../../Theme";

// TODO add styles to match outer container

class Layout extends Component {
    static propTypes = {
        showWorksFilter: bool,
        toggleShowWorksFilter: func
    };
    static defaultProps = {
        footer: content.footer.social
    };

    render() {
        const { footer, showWorksFilter, toggleShowWorksFilter } = this.props;

        return (
            <Fragment>
                <Navigation toggleShowWorksFilter={toggleShowWorksFilter} />
                <Main>
                    <InnerWrap showWorksFilter={showWorksFilter}>
                        {this.props.children}
                    </InnerWrap>
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
    margin-top: 4rem;
    font-family: ${props => props.theme.fontFamilyPrimary};
`;

const InnerWrap = styled.div`
    padding: 100px 80px;
    ${mediaAnd.phoneLandscape`padding: 60px 10px;`};
`;

export const FirstFold = styled.div``;

// theme={this.props.theme}
