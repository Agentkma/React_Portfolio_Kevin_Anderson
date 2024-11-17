// ! External
import React from "react";

// ! Internal
import styled from "styled-components";
import { SsectionGrid } from "../../shared/StyledComponents";

const ProjectsContainer = (props) => <Ssection>{props.children}</Ssection>;

export default ProjectsContainer;

const Ssection = styled(SsectionGrid)`
    margin: 70px auto 0 auto;
    overflow: hidden;
`;
