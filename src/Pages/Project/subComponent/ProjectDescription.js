import React from "react";
import styled from "styled-components";
import Row from "../../../hoc/Row";
import { mediaMin } from "../../../Theme";

export function ProjectDescription() {
    return (
        <StyledSection class="hero-text add-top-half add-bottom">
            <Row class="row">
                <StyledArticleMd12 class="col-md-12">
                    <StyledH3BlkFont3Bold class="black font3bold">
                        Good design and clean coding
                    </StyledH3BlkFont3Bold>
                    <StyledDivLinerSm class="liner-small color-bg" />
                    <StyledH6grFont3Bold class="grey font3bold">
                        That is a Principle
                    </StyledH6grFont3Bold>
                </StyledArticleMd12>
            </Row>
            <StyledRow class="row add-top-quarter">
                <StyledArticleColMd8 class="col-md-8">
                    <StyledPgray class="grey">
                        Galvanize Eats is a simple app demonstrating the use of
                        forms and dynamic menu items received from an API.{" "}
                        <br />
                        <br />The order data is organized into an order object
                        and sent to an API.<br />
                        <br />The app uses Materialize CSS framework, HTML, CSS,
                        JavaScript, and jQuery.
                    </StyledPgray>
                </StyledArticleColMd8>
                <StyledArticleColMd4 class="col-md-4">
                    <StyledUlProjectSpec class="project-spec signature-karl">
                        <StyledLiFont3BoldBlk class="font3bold black">
                            Category:{" "}
                            <StyledSpanFont3lightDark class="font3light dark">
                                Front End &amp; CSS Framework
                            </StyledSpanFont3lightDark>
                        </StyledLiFont3BoldBlk>
                        <StyledLiFont3BoldBlk class="font3bold black">
                            Client:{" "}
                            <StyledSpanFont3lightDark class="font3light dark">
                                None/Personal Project
                            </StyledSpanFont3lightDark>
                        </StyledLiFont3BoldBlk>
                        <StyledLiFont3BoldBlk class="font3bold black">
                            Delivered:{" "}
                            <StyledSpanFont3lightDark class="font3light dark">
                                2017 September
                            </StyledSpanFont3lightDark>
                        </StyledLiFont3BoldBlk>
                    </StyledUlProjectSpec>
                    <StyledButton
                        class="btn btn-signature btn-signature-karl btn-signature-color"
                        onClick={params => {}}
                    >
                        Live Preview
                    </StyledButton>
                </StyledArticleColMd4>
            </StyledRow>
        </StyledSection>
    );
}

export default ProjectDescription;
//base styles
const StyledColArticle = styled.article`
    position: relative;
    min-height: 1px;
    padding-right: 1rem;
    padding-left: 1rem;
    box-sizing: border-box;
    display: block;
`;
const StyledSection = styled.section`
    display: block;
    box-sizing: border-box;
`;

const StyledArticleMd12 = StyledColArticle.extend`
    width: 100%;
    float: left;
`;
const StyledH3BlkFont3Bold = styled.h3`
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

const StyledDivLinerSm = styled.div`
    background-color: #ff2238;
    width: 100px;
    height: 2px;
    display: inline-block;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
`;

const StyledH6grFont3Bold = styled.h6`
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

const StyledRow = styled(Row)`
    margin-top: 40px;
`;

const StyledArticleColMd8 = StyledColArticle.extend`
    ${mediaMin.desktop` width: 66.66666667%; float:left`};
`;

const StyledPgray = styled.p`
    color: #999999;
    font-size: 0.75rem;
    line-height: 1.5625rem;
    margin-bottom: 0;
    margin: 0 0 0.625rem;
    box-sizing: border-box;
    display: block;
`;

const StyledArticleColMd4 = StyledColArticle.extend`
    ${mediaMin.desktop` width: 33.333333%; float:left`};
`;

const StyledUlProjectSpec = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const StyledLiFont3BoldBlk = styled.li`
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

const StyledSpanFont3lightDark = styled.span`
    font-family: "designova_ss_light", sans-serif;
    font-weight: 200;
    color: #292929;
    font-size: 0.75rem;
    line-height: 1.5rem;
`;

const StyledButton = styled.button`
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
