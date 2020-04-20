// ! External

import React, { useState } from "react";

// ! Internal

import {
    SlideDownNavDiv,
    Nav,
    ScloseIconMod,
    SLi,
    Sli,
    SsubLi,
    SnavLink,
    SnavItem,
    Ul,
    Sul
} from "../styled-components";
import { ScaleInVerTop } from "../../../Theme/animations";
import { content } from "../../../Assets/Content";

export const NavDrawer = ({ click }) => {
    const [projectListOpen, setProjectListOpen] = useState(false);

    const projectListClickHandler = () => {
        setProjectListOpen(!projectListOpen);
    };

    const renderProjectSubul = () => {
        const { projects } = content;
        return projects.map((project, index) => {
            const { url, id } = project;

            return (
                <SsubLi key={index}>
                    <SnavItem to={`/${url}`} onClick={click}>
                        {id}
                    </SnavItem>
                </SsubLi>
            );
        });
    };

    return (
        <SlideDownNavDiv data-testid="nav-dawer">
            <Nav role="navigation">
                <ScloseIconMod onClick={click} />
                <Ul>
                    <Sli>
                        <SnavLink to="/" exact onClick={click}>
                            Portfolio
                        </SnavLink>
                    </Sli>
                    <Sli>
                        <SnavLink to="/about" onClick={click}>
                            About
                        </SnavLink>
                    </Sli>
                    <SLi onClick={projectListClickHandler}>
                        Project View
                        {projectListOpen && (
                            <ScaleInVerTop>
                                <Sul>{renderProjectSubul()}</Sul>
                            </ScaleInVerTop>
                        )}
                    </SLi>
                    <Sli>
                        <SnavLink to="/contact" onClick={click}>
                            Say Hello
                        </SnavLink>
                    </Sli>
                </Ul>
            </Nav>
        </SlideDownNavDiv>
    );
};

export default NavDrawer;
