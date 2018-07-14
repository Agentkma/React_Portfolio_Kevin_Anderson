// ! External
import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styled from "styled-components";

// ! Internal
import NavCodeIcon from "../NavCodeIcon";
import * as actions from "../../../ducks/index";

const NavHamburger = function({ click, toggleShowWorksFilter, location }) {
    // ! check this: using withRouter can set codeIcon to show only when route is /home
    const codeIcon =
        location.pathname === "/" ? (
            <NavCodeIcon onClick={toggleShowWorksFilter} />
        ) : null;
    return (
        <Container>
            {codeIcon}
            <HamburgerDiv onClick={click}>
                <HamburgerBar />
                <HamburgerBar />
                <HamburgerBar />
            </HamburgerDiv>
        </Container>
    );
};

NavHamburger.propTypes = {};

const mapStateToProps = state => {
    const { worksFilterShown } = this.state;
    return {
        worksFilterShown: worksFilterShown
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleShowWorksFilter: () => dispatch(actions.toggleShowWorksFilter())

        // onIngredientRemoved: ingName =>
        //     dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: path =>
        //     dispatch(actions.setAuthRedirectPath(path))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(NavHamburger));

const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 0;
    height: 90%;
`;

const HamburgerDiv = styled.div`
    width: auto !important;
    height: 1rem;
    background-repeat: repeat-x;
    color: #ffffff;
    margin: auto;
    cursor: pointer;
    font-size: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
    @media (min-width: 768px) {
        height: 2rem;
        padding: 7px 10px;
    }
`;

const HamburgerBar = styled.span`
    background-color: #000;
    border-radius: 1px 1px 1px 1px;
    display: block;
    height: 2px;
    width: 1.2rem;
    margin: 2px 0;
    @media (min-width: 768px) {
        width: 1.5rem;
        height: 3px;
        margin: 3px 0;
    }
`;
