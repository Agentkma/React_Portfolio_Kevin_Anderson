// ! External

import styled from "styled-components";
import { Form, Field } from "formik";

// ! Internal

import { mediaMin } from "../../Theme";

// ! Styles

export const Ssection = styled.section`
    background-color: ${props => props.theme.colorBgSecondary};
    box-sizing: border-box;
    height: auto;
    padding: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Sform = styled(Form)`
    width: 100%;
    ${mediaMin.tablet` width: 80%;`};
`;

export const Sfieldset = styled.fieldset`
    border: none !important;
`;

export const Slegend = styled.legend`
    padding-bottom: 2rem;
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 19px;
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontSecondary};
    ${mediaMin.desktop`
    font-size: 2.25rem;
    line-height: 43px;`};
`;

export const Sbutton = styled.button`
    background-color: ${props => props.theme.colorAccentPrimary};
    color: ${props => props.theme.colorFontSecondary};
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
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    user-select: none;
    box-sizing: border-box;
    &:hover {
        opacity: ${props => props.disabled ? 1 : 0.4}
    }
`;

export const Sfield = styled(Field)`
    border-color: #ccc !important;
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    color: #ccc !important;
    font-size: 14px !important;
    line-height: 20px !important;
    font-weight: 300 !important;
    margin-bottom: 30px !important;
    padding: 10px 0 !important;
    width: 100%;
    transition: all 0.8s linear;
`;

export const Stextarea = styled.textarea`
    border: none !important;
    border-bottom: 1px solid !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    font: none !important;
    font-family: ${props => props.theme.fontFamilySecondary} !important;
    font-size: 14px !important;
    line-height: 20px !important;
    font-weight: 300 !important;
    margin-bottom: 0px !important;
    padding: 10px 0 !important;
    resize: none;
    width: 100%;
    transition: all 0.8s linear;
    &::placeholder {
        font: none !important;
        font-family: ${props => props.theme.fontFamilySecondary} !important;
        font-size: 14px !important;
        font-weight: 300 !important;
    }
`;
export const SerrorMessage = styled.p` 
    padding-bottom: 1rem; 
    margin-top: 0;
    font-size: ${props => props.theme.fontSizeSmall};
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontSecondary};`;

export const Sdiv = styled.div`
    display: block;
`;
export const Slabel = styled.label`
    visibility: collapse;
`;
