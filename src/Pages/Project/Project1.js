import React from "react";
import Layout1 from "../../HOC/Layout/projectLayouts/Layout1";
import { FadeInPageContainer } from "../../Theme/animations";

export function Project1() {
    return (
        <FadeInPageContainer>
            <Layout1 project="0" />
        </FadeInPageContainer>
    );
}

export default Project1;
