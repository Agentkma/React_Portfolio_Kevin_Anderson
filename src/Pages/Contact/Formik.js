import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
    Ssection,
    Sform,
    Sfieldset,
    Slegend,
    Sbutton,
    Sfield,
    Stextarea,
    Slabel,
    Sdiv
} from "./Form";

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

                        <Sfield name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="name" />
                        <Sfield name="email" type="email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <ErrorMessage name="email" />
                        <Field
                            name="message"
                            type="message"
                            component={Stextarea}
                        />
                        {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                        ) : null}
                        <ErrorMessage name="email" />

                        <Sbutton id="submit" name="submit" type="submit">
                            Send Message
                        </Sbutton>
                    </Sfieldset>
                </Sform>
            )}
        </Formik>
    </Ssection>
);
