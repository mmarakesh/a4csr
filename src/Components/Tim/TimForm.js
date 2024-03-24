import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Tim.css';

function TimForm() {
    const [state, handleSubmit] = useForm("xjvnedqo");
    if (state.succeeded) {
        return <p className='thanks'>Thanks for your message!</p>;
    }
    return (
        <div>
        <h2 class="featurette-heading fw-normal lh-1">Naša vrata su uvijek otvorena za one koji dijele naše ideale i spremni su doprinijeti putem volonterskog angažmana.</h2>
        <br/>
        <div className='tim-form-box'>
        <p className="lead">Vaša podrška nije samo dobrodošli, već je ključna za našu zajedničku misiju izgradnje bolje budućnosti za sve.</p>
        <form className='tim-form' onSubmit={handleSubmit}>
        
        <input
            className='tim-input'
            type="text" 
            name="message"
            placeholder='Ime Prezime'
        />
        <input
            className='tim-input'
            type="email" 
            name="email"
            placeholder='email'
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