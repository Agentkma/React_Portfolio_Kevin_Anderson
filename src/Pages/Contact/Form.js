import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { isEmpty } from 'lodash'

import {
    Ssection,
    Sform,
    Sfieldset,
    Slegend,
    Sbutton,
    Sfield,
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


const CustomErrorMessage = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    return (
        touched.email && errors.email ? <SerrorMessage>{errors.email}</SerrorMessage> : null
    );
}