import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleShowWorksFilter } from "../../../ducks/home";

const NavCodeIcon = ({ toggleWorksFilter }) => {
    return (
        <button onClick={() => toggleWorksFilter()}>
            <StyledCodeIcon />
        </button>
    );
};

// export default NavCodeIcon;

const mapDispatchToProps = dispatch => {
    return {
        toggleWorksFilter: () => dispatch(toggleShowWorksFilter())

        // onIngredientRemoved: ingName =>
        //     dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: path =>
        //     dispatch(actions.setAuthRedirectPath(path))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NavCodeIcon);

const StyledCodeIcon = styled(CodeIcon)`
    cursor: pointer;
    width: auto !important;
    height: 1rem;
    padding: 7px 10px;
    margin: auto;
    &:hover,
    &:focus {
        background-image: none;
        background-color: #eee;
        color: #000;
    }
    @media (min-width: 768px) {
        height: 2rem;
    }
`;
