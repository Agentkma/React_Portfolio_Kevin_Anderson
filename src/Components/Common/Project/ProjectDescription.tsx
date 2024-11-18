import styled from "styled-components";

// ! Internal
import {
    Sa,
    Scontainer,
    InnerWrap,
    Srow,
} from "../../../shared/StyledComponents";
import { mediaMin } from "../../../Theme";
import { content  } from "../../../Assets/Content";

interface ProjectCarousel1Props {
  project: string;
}

export function ProjectDescription({ project }:ProjectCarousel1Props) {
    const descriptions = content.projects[Number(project)].description;

    return descriptions.map(
        ({
            taglineHeading,
            taglineSubHeading,
            projectDescription,
            categories,
            delivered,
            liveSiteLink,
        }) => (
            <InnerWrap>
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
                                        Client:{" "}
                                        <Sspan>None/Personal Project</Sspan>
                                    </Sli>
                                    <Sli>
                                        Delivered: <Sspan>{delivered}</Sspan>
                                    </Sli>
                                </Sul>
                                {liveSiteLink === "NA" ? null : (
                                    <Sa href={liveSiteLink} target="_blank">
                                        Live App
                                    </Sa>
                                )}
                            </StyledColArticle>
                        </Srow2>
                    </Ssection>
                </Scontainer>
            </InnerWrap>
        )
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

const Sarticle = styled(StyledColArticle)`
    width: 100%;
`;
const Sh3 = styled.h3`
    font-size: 3rem;
    line-height: 4rem;
    font-family: ${(props) => props.theme.fontFamilySecondary};
    color: ${(props) => props.theme.colorFontTertiary};
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    display: block;
    box-sizing: border-box;
`;

const Sdiv = styled.div`
    background-color: ${(props) => props.theme.colorAccentPrimary};
    width: 7.5rem;
    height: 2px;
    display: inline-block;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
`;

const Sh6 = styled.h6`
    font-size: 1.25rem;
    line-height: 21px;
    font-family: ${(props) => props.theme.fontFamilySecondary};
    color: ${(props) => props.theme.colorFontQuinternary};
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    box-sizing: border-box;
    display: block;
`;

const Srow2 = styled(Srow)`
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
    color: ${(props) => props.theme.colorFontQuinternary};
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
    border-top: solid 1px ${(props) => props.theme.colorAccentSecondary};
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: bold;
    font-family: ${(props) => props.theme.fontFamilySecondary};
    color: ${(props) => props.theme.colorFontTertiary};
    list-style-type: none;
    padding: 0;
`;

const Sspan = styled.span`
    font-family: ${(props) => props.theme.fontFamilySecondary};
    font-weight: 200;
    color: ${(props) => props.theme.colorFontQuaternary};
    font-size: 1rem;
    line-height: 1.5rem;
`;
