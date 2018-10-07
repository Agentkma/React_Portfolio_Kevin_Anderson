import React from "react";
import styled from "styled-components";

const Input = ({ change, elementType, elementConfig, value }) => {
    let inputType = null;
    switch (elementType) {
        case "text":
            inputType = (
                <Sdiv>
                    <Slabel for={elementConfig.id}>
                        {elementConfig.placeholder}
                    </Slabel>
                    <Sinput
                        {...elementConfig}
                        value={value}
                        onChange={change}
                    />{" "}
                </Sdiv>
            );
            break;
        case "textarea":
            inputType = (
                <Sdiv>
                    <Slabel htmlFor={elementConfig.id}>
                        {elementConfig.placeholder}
                    </Slabel>
                    <Stextarea
                        {...elementConfig}
                        value={value}
                        onChange={change}
                    />{" "}
                </Sdiv>
            );
            break;
        default:
            inputType = (
                <Sdiv>
                    <Slabel htmlFor={elementConfig.id}>
                        {elementConfig.placeholder}
                    </Slabel>
                    <Sinput
                        {...elementConfig}
                        value={value}
                        onChange={change}
                    />
                </Sdiv>
            );
    }
    return inputType;
};

export default Input;

const Sinput = styled.input`
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

const Stextarea = styled.textarea`
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

const Sdiv = styled.div`
    display: block;
`;
const Slabel = styled.label`
    visibility: collapse;
`;
