// ! External
import React from "react";
// import PropTypes from 'prop-types'

// ! Internal
import styled from "styled-components";

const ProjectsContainer = props => <Ssection>{props.children}</Ssection>;

export default ProjectsContainer;

const Ssection = styled.section`
    position: relative;
    height: 1500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    padding: 0;
    margin: 70px auto 0 auto;
    overflow: hidden;
`;
