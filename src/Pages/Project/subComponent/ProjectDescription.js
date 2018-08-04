import React from "react";
import styled from "styled-components";
import Row from "../../../hoc/Row";
import { mediaMin } from "../../../Theme";
import content from "../../../../Assets/Content";

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
        <S_Section>
            <Row>
                <S_article>
                    <S_h3>{taglineHeading}</S_h3>
                    <S_div>
                        <S_h6>That is a Principle{taglineSubHeading}</S_h6>
                    </S_div>
                </S_article>
            </Row>
            <S_Row>
                <S_article_2>
                    <S_p>
                        {projectDescription}
                        Galvanize Eats is a simple app demonstrating the use of
                        forms and dynamic menu items received from an API.{" "}
                        <br />
                        <br />The order data is organized into an order object
                        and sent to an API.<br />
                        <br />The app uses Materialize CSS framework, HTML, CSS,
                        JavaScript, and jQuery.
                    </S_p>
                </S_article_2>
                <S_article_3>
                    <S_ul>
                        <S_li>
                            Category:{" "}
                            <S_span>
                                {categories}Front End &amp; CSS Framework
                            </S_span>
                        </S_li>
                        <S_li>
                            Client: <S_span>None/Personal Project</S_span>
                        </S_li>
                        <S_li>
                            Delivered:{" "}
                            <S_span>{delivered}2017 September</S_span>
                        </S_li>
                    </S_ul>
                    <S_button onClick={params => {}}>Live Preview</S_button>
                </S_article_3>
            </S_Row>
        </S_Section>
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
const S_Section = styled.section`
    display: block;
    box-sizing: border-box;
`;

const S_article = StyledColArticle.extend`
    width: 100%;
    float: left;
`;
const S_h3 = styled.h3`
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

const S_div = styled.div`
    background-color: #ff2238;
    width: 100px;
    height: 2px;
    display: inline-block;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
`;

const S_h6 = styled.h6`
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

const S_Row = styled(Row)`
    margin-top: 40px;
`;

const S_article_2 = StyledColArticle.extend`
    ${mediaMin.desktop` width: 66.66666667%; float:left`};
`;

const S_p = styled.p`
    color: #999999;
    font-size: 0.75rem;
    line-height: 1.5625rem;
    margin-bottom: 0;
    margin: 0 0 0.625rem;
    box-sizing: border-box;
    display: block;
`;

const S_article_3 = StyledColArticle.extend`
    ${mediaMin.desktop` width: 33.333333%; float:left`};
`;

const S_ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const S_li = styled.li`
    padding: 0.625rem 0;
    border-top: solid 1px #eee;
    font-size: 0.75rem;
    line-height: 1.5rem;
    font-weight: bold;
    font-family: "designova_ss_bold", sans-serif;
    color: #121212;
    list-style-type: none;
    padding: 0;
`;

const S_span = styled.span`
    font-family: "designova_ss_light", sans-serif;
    font-weight: 200;
    color: #292929;
    font-size: 0.75rem;
    line-height: 1.5rem;
`;

const S_button = styled.button`
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
