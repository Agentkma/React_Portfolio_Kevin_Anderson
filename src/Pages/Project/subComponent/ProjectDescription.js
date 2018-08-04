// ! External
import React from "react";
import styled from "styled-components";

// ! Internal
import { Scontainer, Srow } from "../../../shared/StyledComponents";
import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";

export function ProjectDescription({ project }) {
    const {
        taglineHeading,
        taglineSubHeading,
        projectDescription,
        categories,
        delivered,
        liveSiteLink
    } = content.projects[project].description;
    return (
        <Scontainer>
            <Ssection>
                <Srow>
                    <Sarticle>
                        <Sh3>{taglineHeading}</Sh3>
                        <Sdiv />
                        <Sh6>{taglineSubHeading}</Sh6>
                    </Sarticle>
                </Srow>
                <Srow2>
                    <StyledColArticle>
                        {projectDescription.map((s, index) => (
                            <Sp key={index}>{s}</Sp>
                        ))}
                    </StyledColArticle>
                    <StyledColArticle>
                        <Sul>
                            <Sli>
                                Category: <Sspan>{categories}</Sspan>
                            </Sli>
                            <Sli>
                                Client: <Sspan>None/Personal Project</Sspan>
                            </Sli>
                            <Sli>
                                Delivered: <Sspan>{delivered}</Sspan>
                            </Sli>
                        </Sul>
                        <Sbutton onClick={params => {}}>Live Preview</Sbutton>
                    </StyledColArticle>
                </Srow2>
            </Ssection>
        </Scontainer>
    );
}

export default ProjectDescription;

// ! Styles

//base styles
const StyledColArticle = styled.article`
    position: relative;
    min-height: 1px;
    padding-right: 1rem;
    padding-left: 1rem;
    box-sizing: border-box;
    display: block;
`;
const Ssection = styled.section`
    display: block;
    box-sizing: border-box;
`;

const Sarticle = StyledColArticle.extend`
    width: 100%;
`;
const Sh3 = styled.h3`
    font-size: 3rem;
    line-height: 4rem;
    font-family: "designova_ss_bold", sans-serif;
    color: #121212;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    display: block;
    box-sizing: border-box;
`;

const Sdiv = styled.div`
    background-color: #ff2238;
    width: 7.5rem;
    height: 2px;
    display: inline-block;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
`;

const Sh6 = styled.h6`
    font-size: 1.25rem;
    line-height: 21px;
    font-family: "designova_ss_bold", sans-serif;
    color: #999999;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    box-sizing: border-box;
    display: block;
`;

const Srow2 = Srow.extend`
    margin-top: 40px;
    margin-left: -1rem;
    margin-right: -1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    ${mediaMin.tablet`grid-template-columns: 2fr 1fr;`};
`;

const Sp = styled.p`
    display: table;
    padding-bottom: 1rem;
    color: #999999;
    font-size: 1rem;
    line-height: 1.5625rem;
    margin-bottom: 0;
    margin: 0 0 0.625rem;
    box-sizing: border-box;
`;

const Sul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const Sli = styled.li`
    padding: 0.625rem 0;
    border-top: solid 1px #eee;
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: bold;
    font-family: "designova_ss_bold", sans-serif;
    color: #121212;
    list-style-type: none;
    padding: 0;
`;

const Sspan = styled.span`
    font-family: "designova_sSlight", sans-serif;
    font-weight: 200;
    color: #292929;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const Sbutton = styled.button`
    background-color: #ff2238 !important;
    color: #ffffff !important;
    border: none;
    border-radius: 0;
    padding: 1rem 1.25rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-top: 1.25rem;
    transition: all 0.4s ease-in-out;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
`;
