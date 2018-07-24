import React from "react";
// import PropTypes from 'prop-types'

import styled from "styled-components";

const ProjectsContainer = props => (
    <StyledContainer>{props.children}</StyledContainer>
);

export default ProjectsContainer;

const StyledContainer = styled.section`
    position: relative;
    height: 1500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    padding: 0;
    margin: 70px auto 0 auto;
    overflow: hidden;
`;
