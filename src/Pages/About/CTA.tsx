
import { Link } from "react-router-dom";
import styled from "styled-components";

import { content } from "../../Assets/Content";
import CTAbgImg from "../../Assets/Images/bg/about-interested-1600x1006.jpg";
import { Srow } from "../../shared/StyledComponents";
import { SdivLine } from "./Values";

const { contact } = content.about.main;

const CTA = function () {
  const { header, main } = contact;
  return (
    <Ssection>
      <Srow>
        <Sarticle>
          {" "}
          <Sh3>{header}</Sh3>
          <SdivLine />
          <Sh6>{main}</Sh6>
          <Link to="/contact">
            <Sspan>Contact Me</Sspan>
          </Link>
        </Sarticle>
      </Srow>
    </Ssection>
  );
};

export default CTA;

// ! Styles
const Ssection = styled.section`
  height: auto;
  position: relative;
  background-image: url(${CTAbgImg});
  background-position: 0px -113.5px;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  box-sizing: border-box;
  padding: 10%;
`;

const Sarticle = styled.article`
  text-align: center;
`;

const Sh3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizeSecondary};
  line-height: 48px;
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  color: ${(props) => props.theme.colorFontSecondary};
  margin-top: 0;
  margin-bottom: 0;
`;

const Sh6 = styled.h6`
  font-size: ${(props) => props.theme.fontSizeSmall};
  line-height: 48px;
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  color: ${(props) => props.theme.colorFontSecondary};
  margin-top: 0;
  margin-bottom: 0;
`;

const Sspan = styled.span`
  background-color: ${(props) => props.theme.colorAccentPrimary};
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colorFontSecondary};
  cursor: pointer;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: normal;
  letter-spacing: 0.25rem;
  line-height: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0;
  padding: 1rem 1.25rem;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  &:hover {
    opacity: 0.4;
  }
`;
