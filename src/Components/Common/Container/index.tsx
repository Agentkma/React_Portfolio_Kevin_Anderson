import styled from "styled-components";
import { FC,PropsWithChildren } from "react";

import { mediaMin } from "../../../Theme";

export const Container:FC<PropsWithChildren> = ({children}) => {
    return <Sdiv>{children}</Sdiv>;
};

export default Container;

// ! Styles

const Sdiv = styled.div`
    width: 90%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    ${mediaMin.desktop` width: 80%`};
`;
