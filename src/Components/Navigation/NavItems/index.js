import React, { useState } from 'react'
import { func } from 'prop-types'
import styled from "styled-components";

// ! Internal

import NavItem, { Sli, SnavLink } from "./NavItem";
import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";



function NavItems({ click }) {

    const [projectListOpen, setProjectListOpen] = useState(false);

    const projectListClickHandler = () => {
        setProjectListOpen(!projectListOpen)
    }


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
        <Ul>
            <NavItem link="/" exact click={click}>
                Portfolio
                </NavItem>
            <NavItem link="/about" click={click}>
                About
                </NavItem>
            <SLi
                onClick={projectListClickHandler}

            >
                Project View
                    {/* {projectSubUl} */}
                {projectListOpen && <ul>{renderProjectSubul()}</ul>}

            </SLi>
            <NavItem link="/contact" click={click}>
                Say Hello
                </NavItem>
        </Ul>
    );

}

NavItems.propTypes = {
    click: func,
}

export default NavItems




// ! Styles

const Ul = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 50px;
    padding-bottom: 100px;
    width: 100%;
    background-color: ${props => props.theme.colorBgPrimary};
    box-sizing: border-box;
    ${mediaMin.tablet` position: relative;
        top: 10%;
        background: transparent;`};
`;

const SnavItem = styled(SnavLink)`
    ${mediaMin.tablet`font-size: 0.75rem;
        line-height: 0.5rem !important;`};
`;

const SsubLi = styled(Sli)`
    padding: 3px 0;
    line-height: 1rem !important;
`;

const SLi = styled.li`
    height: 2rem;
    cursor: pointer;
    position: relative;
    display: inline-block;
    background-color: ${props => props.theme.colorBgPrimary};
    margin-right: -5px;
    &:first-child {
        border-left: 0;
    }
    color: ${props => props.theme.colorFontPrimary};
    text-transform: uppercase;
    display: block;
    font-size: ${props => props.theme.fontSizeSmall};
    font-weight: normal;
    line-height: 21px;
    padding: 6px 0;
    text-shadow: none;
    /* transition-property: height, background-color;
    transition-duration: 1.5s, 0.5s;
    transition: height linear, background-color ease-out; */
    transition: all 0.5s ease-out;
    &:hover {
        height: 100%;
        background-color: ${props => props.theme.colorAccentSecondary};
        text-decoration: none;
    }
    ${mediaMin.tablet`width: 75%;
        margin: 0 auto;
        background: transparent;
        color: ${props => props.theme.colorFontSecondary};
        text-transform: lowercase;
        font-size: ${props => props.theme.fontSizeSecondary};
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: #ff2238 !important;
            background: transparent;
            text-decoration: none;
        }`};
`;

const SprojectSubUL = styled.ul`
    transform: scaleY(0);
    opacity: 0;
    transition: all 0.3s linear;

    /* ${SLi}:hover & {
        opacity: 1;
        transform: scaleY(1);
    } */
`;
