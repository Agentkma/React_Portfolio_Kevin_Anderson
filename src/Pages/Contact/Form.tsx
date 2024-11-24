import * as emailjs from "emailjs-com";
import  { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
    Ssection,
    Sform,
    Sfieldset,
    Slegend,
    Sbutton,
    Sfield,
    SerrorMessage,
} from "./styled-components";

import { emailJsUserID } from "../../config";

let template_params = {
    reply_to: "reply_to_value",
    from_name: "from_name_value",
    to_name: "Kevin Anderson",
    message_html: "message_html_value",
};

const service_id = "outlook";
const template_id = "template_iAQcKsQI";

export const legendMessage = {
    default: "Reach Out...",
    messageSent: "Message Sent!",
    messageSentError: "Error Sending Message",
};

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(70, "Too Long!")
        .required("Name Required"),
    email: Yup.string().email("Invalid email").required("Email Required"),
    message: Yup.string()
        .min(10, "Too Short!")
        .max(500, "Too Long!")
        .required("Message Required"),
});

interface FormValues {
    name: string;
    email: string;
    message: string;
}

interface FormActions {
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setErrors: (errors: any) => void;
    resetForm: () => void;
}

type SetLegend = (legend: string) => void;

const handleSubmit = async (
    values: FormValues,
    actions: FormActions,
    setLegend: SetLegend
) => {
    const { email, message, name } = values;
    const { setStatus, setSubmitting, setErrors, resetForm } = actions;

    template_params["from_name"] = name;
    template_params["message_html"] = message;
    template_params["reply_to"] = email;

    try {
        await emailjs.send(
            service_id,
            template_id,
            template_params,
            emailJsUserID
        );

        resetForm();
        setLegend(legendMessage.messageSent);
    } catch (error) {
        setSubmitting(false);
        setErrors(JSON.stringify(error));
        setStatus({
            msg: legendMessage.messageSentError,
        });
        setLegend(legendMessage.messageSentError);
    }
};

export const Form = () => {
    const [legend, setLegend] = useState(legendMessage.default);

    const handleBlur = () => {
        setLegend(legendMessage.default);
    };

    return (
        <Ssection>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) =>
                    handleSubmit(values, actions, setLegend)
                }
            >
                {() => (
                    <Sform aria-label="contact form">
                        <Sfieldset>
                            <Slegend>{legend}</Slegend>
                            <Sfield
                                name="name"
                                type="name"
                                placeholder="Your Name"
                                onBlur={handleBlur}
                            ></Sfield>
                            <ErrorMessage
                                data-testid="name-field-error"
                                name="name"
                                component={SerrorMessage}
                            />
                            <Sfield
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                onBlur={handleBlur}
                            ></Sfield>
                            <ErrorMessage
                                component={SerrorMessage}
                                name="email"
                            />

                            <Sfield
                                name="message"
                                type="message"
                                component="textarea"
                                placeholder="Your Message"
                                onBlur={handleBlur}
                            />
                            <ErrorMessage
                                component={SerrorMessage}
                                name="message"
                            />

                            <Sbutton id="submit" name="submit" type="submit">
                                Send Message
                            </Sbutton>
                        </Sfieldset>
                    </Sform>
                )}
            </Formik>
        </Ssection>
    );
};

export default Form;
