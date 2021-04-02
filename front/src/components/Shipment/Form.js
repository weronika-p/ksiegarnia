import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { submit } from "./submit";

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = "Proszę uzupełnić wymagane pole"
    } else if (values.firstName.length < 4) {
        errors.firstName = "Musi zawierać co najmniej 4 znaki"
    } else if (values.firstName.length > 50) {
        errors.firstName = "Nie może zawierać więcej niż 50 znaków"
    }
    if (!values.lastName) {
        errors.lastName = "Proszę uzupełnić wymagane pole"
    } else if (values.lastName.length < 5) {
        errors.lastName = "Musi zawierać co najmniej 5 znaków"
    } else if (values.firstName.length > 50) {
        errors.firstName = "Nie może zawierać więcej niż 50 znaków"
    }
    if (!values.city) {
        errors.city = "Proszę uzupełnić wymagane pole"
    }
    if (!values.zipCode) {
        errors.zipCode = "Proszę uzupełnić wymagane pole"
    } else if (!/[0-9]{2}\-[0-9]{3}/.test(values.zipCode)) {
        errors.zipCode = "Proszę wprowadzić kod pocztowy w formacie XX-XXX"
    }
    return errors
}

const renderField = ({ input, label, id, type, meta: { touched, error } }) => {
    return (
        <div className="group">
            <input {...input} type={type} className="input-form"/>
            <span className="highlight" id={"hl-" + id}/>
            <span className="bar" id={"bar-" + id}/>
            <label className="form-order">{label}</label>
            {touched && error && <span class="error-msg-active" id={"error-" + id}>{error}</span>}
        </div>
    )
}

const OrderForm = ({handleSubmit, order}) => {
    return (
        <form onSubmit={handleSubmit(submit)}>
                <Field name="firstName" component={renderField} type="text" id="first-name" label="Imię*"/>
                <Field name="lastName" component={renderField} type="text" id="last-name" label="Nazwisko*"/>
                <Field name="city" component={renderField} type="text" id="city" label="Miejscowość*"/>
                <Field 
                    name="zipCode" 
                    component={renderField} 
                    type="text" 
                    id="zip-code" 
                    pattern="[0-9]{2}\-[0-9]{3}"
                    label="Kod pocztowy"
                />
            <Link to="/confirmation">
                <button
                    className="go-to-payment"
                    aria-label="Zamawiam i płacę"
                    type="submit">
                    ZAMAWIAM I PŁACĘ
                </button>
            </Link>
        </form>
    )
}

const FormOrder = reduxForm({form: 'order', validate, destroyOnUnmount: false})(OrderForm);
const selector = formValueSelector('order');
const SelectingFormValues = connect(state => {
    const { firstName, lastName, city, zipCode } = selector(state, 'firstName', 'lastName', 'city', 'zipCode');
    return { firstName, lastName, city, zipCode }
})(FormOrder)

export default SelectingFormValues