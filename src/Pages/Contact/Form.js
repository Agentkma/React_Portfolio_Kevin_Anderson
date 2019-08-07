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
const formSpreeUrl = 'https://formspree.io/kevin@kevinanderson.codes'

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

export const Form = () => (
    <Ssection>
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            validationSchema={ContactSchema}
            onSubmit={values => {

                // same shape as initial values
                // TODO: add a form submitted state
                console.log(values);
                fetch(formSpreeUrl, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, cors, *same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrer: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(values), // * body data type must match "Content-Type" header
                })
            }}

            enctype="multipart/form-data"
            method="post"
            name='contact'
        >
            {({ errors, touched }) => (
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


