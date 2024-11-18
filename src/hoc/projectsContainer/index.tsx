
import  { FC,PropsWithChildren } from "react";

import styled from "styled-components";
import { SsectionGrid } from "../../shared/StyledComponents";

const ProjectsContainer:FC<PropsWithChildren> = ({children}) => <Ssection>{children}</Ssection>;

export default ProjectsContainer;

const Ssection = styled(SsectionGrid)`
    margin: 70px auto 0 auto;
    overflow: hidden;
`;
