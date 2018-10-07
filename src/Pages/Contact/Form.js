// ! External

import React, { Component } from "react";
import styled from "styled-components";

// ! Internal

import Input from "./Input";
import { mediaMin } from "../../Theme";
import { Sa } from "../../shared/StyledComponents";

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
                }
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your Email",
                    name: "email",
                    id: "email"
                }
            },
            message: {
                elementType: "textarea",
                elementConfig: {
                    type: "",
                    placeholder: "Your Message",
                    name: "message",
                    id: "message"
                }
            }
        }
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
                        <div class="btn-wrap  text-left">
                            <Sa
                                as="button"
                                id="submit"
                                name="submit"
                                type="submit"
                            >
                                Send Message
                            </Sa>
                        </div>
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
