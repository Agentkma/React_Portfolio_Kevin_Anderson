 import{ useEffect } from "react";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { ProjectIndex } from "shared/types";


export function ProjectTitle({ project }: ProjectIndex) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { name, categories } = content.projects[Number(project)].title;
    return (
        <Ssection id={project}>
            <Sh1>
                {name} <Sspan>/ {categories}</Sspan>
            </Sh1>
        </Ssection>
    );
}

export default ProjectTitle;

// ! Styles

const Ssection = styled.section`
    box-sizing: border-box;
    background-color: ${props => props.theme.colorBgPrimary};
    padding: 2.5rem 0 2.5rem 3.75rem;
`;

const Sh1 = styled.h1`
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.colorFontTertiary};
    margin: 0.67em 0;
`;

const Sspan = styled.span`
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: 0px;
    text-transform: none;
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.fontFamilySecondary};
    font-weight: 500;
`;
