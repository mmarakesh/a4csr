import './ContactForm.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvnoeeo");
    if (state.succeeded) {
        return <p className='handle-submit'>Hvala što ste se pridružili!!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
        id="email"
        className='formspree-input'
        type="email" 
        name="email"
        placeholder='email'
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
        <button className='formspree-btn' type="submit" disabled={state.submitting}>
        Postanite naš partneri
        </button>
    </form>
    );
}
export default ContactForm;