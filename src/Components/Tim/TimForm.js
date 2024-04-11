import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Tim.css';

function TimForm() {
    const [state, handleSubmit] = useForm("moqgkbpp");
    const [formValues, setFormValues] = useState({ fullName: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if any of the form fields are empty
        if (!formValues.fullName || !formValues.email || !formValues.message) {
            alert('Molimo popunite sva polja.');
            return;
        }

        // If all fields are filled, proceed with form submission
        handleSubmit(e);
    };
    if (state.succeeded) {
        return <p className='thanks'>Hvala za vašu poruku!</p>;
    }
    return (
        <div className='tim-container-form'>
        <h2 class="featurette-heading fw-normal lh-1">Naša vrata su uvijek otvorena za one koji dijele naše ideale i spremni su doprinijeti putem volonterskog angažmana.</h2>
        <br/>
        <div className='tim-form-box'>
        <p className="lead">Vaša podrška je ključna za našu zajedničku misiju izgradnje bolje budućnosti za sve.</p>
        <form className='tim-form' onSubmit={handleFormSubmit}>
        
        <input
            className='tim-input'
            type="text" 
            name="fullName"
            placeholder='Ime Prezime'
            value={formValues.fullName}
            onChange={handleChange}
        />
        <input
            className='tim-input'
            type="email" 
            name="email"
            placeholder='email'
            value={formValues.email}
            onChange={handleChange}
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            className='tim-input'
            type="text"
            name="message"
            placeholder='Vaša poruka'
            value={formValues.message}
            onChange={handleChange} 
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" class="tim-btn" disabled={state.submitting}>
        Pošaljite »
        </button>
        </form>
        </div>
        </div>
    );
}

export default TimForm;