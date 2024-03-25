import './ContactForm.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvnoeeo");
    if (state.succeeded) {
        return <p className='thanks'>Hvala što ste se pridružili!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
        id="email"
        className='formspree-input'
        type="email" 
        name="email"
        placeholder='email'
        required = ''
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <button className='formspree-btn' type="submit" disabled={state.submitting}>
        <h4 className='form-down'>Postanite naš partneri</h4>
        </button>
    </form>
    );
}
export default ContactForm;