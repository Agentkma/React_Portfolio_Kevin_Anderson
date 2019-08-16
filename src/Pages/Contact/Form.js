
import * as emailjs from 'emailjs-com';
import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";


import {
    Ssection,
    Sform,
    Sfieldset,
    Slegend,
    Sbutton,
    Sfield,
    SerrorMessage
} from "./styled-components";

import { emailJsUserID } from '../../config';

let template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "to_name": "Kevin Anderson",
    "message_html": "message_html_value"
}

const service_id = "gmail";
const template_id = "template_iAQcKsQI";




const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    message: Yup.string()
        .min(10, "Too Short!")
        .max(500, "Too Long!")
        .required("Required")
});

const handleSubmit = async (values, actions) => {

    const { email, message, name } = values;
    const { setStatus, setSubmitting, setErrors } = actions;

    template_params["from_name"] = name;
    template_params["message_html"] = message;
    template_params["reply_to"] = email;

    try {
        await emailjs.send(service_id, template_id, template_params, emailJsUserID);
        setSubmitting(false);

    }
    catch (error) {
        setSubmitting(false);
        setErrors(JSON.stringify(error));
        setStatus({
            msg: 'Error Sending Message'
        });

    }


}

export const Form = () => (
    <Ssection>
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}


        >
            {({ errors, touched, }) => (
                <Sform>
                    <Sfieldset>
                        <Slegend>Reach Out...</Slegend>
                        <Sfield
                            name="name"
                            type="name"
                            placeholder='Your Name'
                        ></Sfield>
                        <ErrorMessage name="name" component={SerrorMessage} />
                        <Sfield
                            name="email"
                            type="email"
                            placeholder='your@email.com'

                        ></Sfield>
                        <ErrorMessage component={SerrorMessage} name="email" />

                        <Sfield
                            name="message"
                            type="message"
                            component='textarea'
                            placeholder='Your Message'
                        />
                        <ErrorMessage component={SerrorMessage} name="message" />

                        <Sbutton id="submit" name="submit" type="submit" disabled={errors.name || errors.email || errors.message}>
                            Send Message
                        </Sbutton>
                    </Sfieldset>
                </Sform>
            )}
        </Formik>
    </Ssection>
);

export default Form;


