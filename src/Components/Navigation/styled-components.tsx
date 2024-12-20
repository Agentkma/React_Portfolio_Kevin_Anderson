import { Link } from "react-router-dom";
import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";

import { mediaMin } from "../../Theme";
import drawerBgImg from "../../Assets/Images/bg/about-bg-1920x1080.jpg";
import { SlideDown, Rotate } from "../../Theme/animations";
import { ScloseIcon } from "../../shared/StyledComponents";

export const SlideDownNavDiv = styled(SlideDown)`
  display: block !important;
  position: fixed;
  width: 100%;
  top: 9vh;
  z-index: 101;
  @media (min-width: 768px) {
    top: 0;
    right: 0;
    z-index: 999;
    position: fixed;
    height: 100vh;
  }
`;

export const Nav = styled.nav`
  @media (min-width: 768px) {
    height: 100%;
    padding: 5rem;
    text-align: center;
    background-image: url(${drawerBgImg});
    background-size: cover;
    background-position: center center;
  }
`;

export const ScloseIconMod = styled(ScloseIcon)`
  visibility: hidden;
  @media (min-width: 768px) {
    visibility: visible;
  }
`;

export const Ul = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 50px;
  padding-bottom: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.colorBgPrimary};
  box-sizing: border-box;
  ${mediaMin.tablet` position: relative;
        top: 10%;
        background: transparent;`};
`;

export const Sul = styled(Ul)`
  padding: 0;
`;

export const SLi = styled.li`
  height: 2rem;
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: ${(props) => props.theme.colorBgPrimary};
  margin-right: -5px;
  &:first-child {
    border-left: 0;
  }
  color: ${(props) => props.theme.colorFontPrimary};
  text-transform: uppercase;
  display: block;
  font-size: ${(props) => props.theme.fontSizeSmall};
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
    background-color: ${(props) => props.theme.colorAccentSecondary};
    text-decoration: none;
  }
  ${mediaMin.tablet`width: 75%;
        margin: 0 auto;
        background: transparent;
        color: ${(props) => props.theme.colorFontSecondary};
        text-transform: lowercase;
        font-size: ${(props) => props.theme.fontSizeSecondary};
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: #ff2238 !important;
            background: transparent;
            text-decoration: none;
        }`};
`;

export const SprojectSubUL = styled.ul`
  transform: scaleY(0);
  opacity: 0;
  transition: all 0.3s linear;

  /* ${SLi}:hover & {
        opacity: 1;
        transform: scaleY(1);
    } */
`;

export const Sli = styled.li`
  position: relative;
  display: inline-block;
  background-color: ${(props) => props.theme.colorBgPrimary};
  margin-right: -5px;
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  display: block;
  font-weight: normal;
  padding: 6px 0;
  text-shadow: none;
  transition: background-color 0.5s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colorAccentSecondary};
    text-decoration: none;
  }
  ${mediaMin.tablet`
        width: 75%;
        margin: 0 auto;
        background: transparent;
        &:last-child {
            margin: 0 auto;
        }
        &:hover {
            background: transparent;
            text-decoration: none;
        }`};
`;

export const SsubLi = styled(Sli)`
  padding: 3px 0;
  line-height: 1rem !important;
`;

export const SnavLink = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorFontPrimary};
  font-size: ${(props) => props.theme.fontSizeSmall};
  font-weight: normal;
  ${mediaMin.tablet`
        text-transform: lowercase;
        color: ${(props) => props.theme.colorFontSecondary};
        font-size: ${(props) => props.theme.fontSizeSecondary};
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: 0.125rem;
        &:hover {
            color: ${(props) => props.theme.colorFontHoverPrimary};
        }`};
`;

export const SnavItem = styled(SnavLink)`
  ${mediaMin.tablet`font-size: 0.75rem;
        line-height: 0.5rem !important;`};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 0;
  height: 90%;
`;

export const HamburgerDiv = styled.div`
  width: auto !important;
  height: 2rem;
  background-repeat: repeat-x;
  color: ${(props) => props.theme.colorBgPrimary};
  margin-top: 0;
  cursor: pointer;
  font-size: 0.875rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:hover,
  &:focus {
    background-image: none;
    background-color: ${(props) => props.theme.colorAccentSecondary};
    color: #000;
  }
  ${mediaMin.tablet` height: 2.5rem;
        padding: 7px 0.625rem;`};
`;

export const HamburgerBar = styled.span`
  background-color: #000;
  border-radius: 1px 1px 1px 1px;
  display: block;
  height: 0.125rem;
  width: 1.5rem;

  @media (min-width: 768px) {
    width: 2rem;
    height: 0.25rem;
  }
`;

export const StyledCodeIcon = styled(CodeIcon)`
  cursor: pointer;
  width: auto !important;
  height: 2rem !important;
  padding: 0 0.625rem;
  margin-top: 0.625rem;
  font-size: 1rem;
  &:hover,
  &:focus {
    background-image: none;
    background-color: ${(props) => props.theme.colorAccentSecondary};
  }
  ${mediaMin.tablet`  height: 2.5rem !important;`};
`;
export const MenuCollapser = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme.colorBgPrimary};
  width: 100%;
  z-index: 1000000;
  height: 9vh;
  line-height: 2rem;
  font-family: ${(props) => props.theme.fontFamilyPrimary};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0 1.125rem;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export const StyledLogoRotate = styled(Rotate)`
  width: auto;
  height: 90%;
  transition: all 0.25s ease-in;
  &:hover {
    opacity: 0.4;
  }
`;

export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;
