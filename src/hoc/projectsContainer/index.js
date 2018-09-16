// ! External
import React from "react";
// import PropTypes from 'prop-types'

// ! Internal
import styled from "styled-components";
import { mediaMin } from "../../Theme";

const ProjectsContainer = props => <Ssection>{props.children}</Ssection>;

export default ProjectsContainer;

const Ssection = styled.section`
    position: relative;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    margin: 70px auto 0 auto;
    overflow: hidden;
    ${mediaMin.desktop` grid-template-columns:repeat(2, minmax(50vw, 1fr));`};
`;
