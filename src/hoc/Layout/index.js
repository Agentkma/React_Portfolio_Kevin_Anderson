// ! External
import React, { Component, Fragment } from "react";

// ! Internal
import styled from "styled-components";
// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { content } from "../../Assets/Content";
import { WorksFilterContext } from "./context";

// TODO add styles to match outer container

class Layout extends Component {
    toggleWorksFilter = () => {
        this.setState(({ showWorksFilter }) => {
            return { showWorksFilter: !showWorksFilter };
        });
    };

    state = {
        showWorksFilter: false,
        toggleWorksFilter: this.toggleWorksFilter
    };
    static propTypes = {};
    static defaultProps = {
        footer: content.footer.social
    };

    render() {
        const { footer } = this.props;

        return (
            <Fragment>
                <WorksFilterContext.Provider value={this.state}>
                    <Navigation />
                    <Main>{this.props.children}</Main>
                    <Footer content={footer} />
                </WorksFilterContext.Provider>
            </Fragment>
        );
    }
}

export default Layout;

export const Main = styled.main`
    display: block;
    box-sizing: border-box;
    margin-left: 0;
    margin-top: 9vh;
    font-family: ${props => props.theme.fontFamilyPrimary};
`;

export const FirstFold = styled.div``;
