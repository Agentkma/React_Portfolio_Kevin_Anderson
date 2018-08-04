import React from "react";
// import PropTypes from 'prop-types'

import styled from "styled-components";

const Row = props => <StyledRow>{props.children}</StyledRow>;

export default Row;

const StyledRow = styled.div`
    margin-right: -1rem;
    margin-left: -1rem;
`;
