import React from 'react'
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import './form.css'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
     return (
        <>
            
            <label className="checkbox">
                <input type="checkbox" {...field} {...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                 <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const FormElement = () => {

    return (
        <div>
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    acceptedTerms: false, 
                    message: '',
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .required('To pole nie może być puste.'),
                    email: Yup.string()
                        .email('Błędny adres email')
                        .required('To pole nie może być puste.'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'Brak zgody uniemożliwia wysłanie formularza.'),
                    message: Yup.string()
                        .required('To pole nie może być puste.'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 2000);
                    console.log(values);
                }}
            >
                {props => (
                    <div className="form__section">
                        <Form>
                            <MyTextInput className="my__input" name="fullName" type="text" placeholder="Name"/>
                            <MyTextInput className="my__input" name="email" type="email" placeholder="Email"/>
                            <Field className="my__input" component="textarea" name="message" type="message" placeholder="Message" rows="5" cols="70"/>
                            <div className="inner">
                                <MyCheckbox name="acceptedTerms" />
                                <p className="accept__text">I hereby give consent for my personal data to be processed by CompanyName.</p>
                            </div>
                            <div className="form__btn__box">
                                <div className="form__btn__background"/>
                                <button type="submit" className="form__btn">{props.isSubmitting ? "Submiting..." : "Submit"}</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default FormElement
