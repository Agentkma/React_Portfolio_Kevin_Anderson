// ! External

import React, { Component } from "react";
import styled from "styled-components";

// ! Internal

import Input from "./Input";
import { mediaMin } from "../../Theme";

class Form extends Component {
    state = {
        formData: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name",
                    name: "name",
                    id: "name"
                },
                value: ""
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your Email",
                    name: "email",
                    id: "email"
                },
                value: ""
            },
            message: {
                elementType: "textarea",
                elementConfig: {
                    type: "",
                    placeholder: "Your Message",
                    name: "message",
                    id: "message"
                },
                value: ""
            }
        }
    };

    handleInputChange = (event, id) => {
        const updatedForm = { ...this.state.formData };
        const updatedElement = { ...updatedForm[id] };
        updatedElement.value = event.target.value;
        updatedForm[id] = updatedElement;
        this.setState({ formData: updatedForm });
    };

    renderInputs = () => {
        let formElements = [];
        for (let key in this.state.formData) {
            formElements.push({
                id: key,
                config: this.state.formData[key]
            });
        }

        return formElements.map((input, i) => (
            <Input
                key={i}
                elementType={input.config.elementType}
                elementConfig={input.config.elementConfig}
                change={event => this.handleInputChange(event, input.id)}
            />
        ));
    };

    render() {
        return (
            <Ssection>
                {/* <div class="alert alert-error error color-bg" id="fname">
                    <p class="black">Name must not be empty</p>
                </div>
                <div class="alert alert-error  error color-bg" id="fmail">
                    <p class="black">Please provide a valid email</p>
                </div>
                <div class="alert alert-error  error color-bg" id="fmsg">
                    <p class="black">Message should not be empty</p>
                </div> */}

                <Sform
                    name="myform"
                    id="contactForm"
                    action="https://formspree.io/kevin@kevinanderson.codes"
                    enctype="multipart/form-data"
                    method="post"
                >
                    <Sfieldset>
                        <Slegend>Reach Out...</Slegend>
                        {this.renderInputs()}

                        <Sbutton id="submit" name="submit" type="submit">
                            Send Message
                        </Sbutton>
                    </Sfieldset>
                </Sform>
            </Ssection>
        );
    }
}

export default Form;

// ! Styles

const Ssection = styled.section`
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

const Sform = styled.form`
    width: 100%;
    ${mediaMin.tablet` width: 80%;`};
`;

const Sfieldset = styled.fieldset`
    border: none !important;
`;

const Slegend = styled.legend`
    padding-bottom: 2rem;
    font-size: ${props => props.theme.fontSizeSecondary};
    line-height: 19px;
    font-family: ${props => props.theme.fontFamilySecondary};
    color: ${props => props.theme.colorFontSecondary};
    ${mediaMin.desktop`
    font-size: 2.25rem;
    line-height: 43px;`};
`;

const Sbutton = styled.button`
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
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    &:hover {
        opacity: 0.4;
    }
`;
