import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
    Ssection,
    Sform,
    Sfieldset,
    Slegend,
    Sbutton,
    Sinput,
    Stextarea,
    Slabel,
    Sdiv,
    SerrorMessage
} from "./styled-components";

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
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Sform>
                    <Sfieldset>
                        <Slegend>Reach Out...</Slegend>
                        <Field
                            name="name"
                            type="name"
                            component={Sinput}
                        />
                        <ErrorMessage component={SerrorMessage} name="name" />
                        <Field
                            name="email"
                            type="email"
                            component={Sinput}
                        />
                        <ErrorMessage component={SerrorMessage} name="email" />

                        <Field
                            name="message"
                            type="message"
                            component={Stextarea}
                        />
                        <ErrorMessage component={SerrorMessage} name="message" />

                        <Sbutton id="submit" name="submit" type="submit">
                            Send Message
                        </Sbutton>
                    </Sfieldset>
                </Sform>
            )}
        </Formik>
    </Ssection>
);

export default Form;