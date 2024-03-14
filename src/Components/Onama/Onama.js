import { useState } from 'react'
import ContactForm from './ContactForm'
import image from './imageHands.jpg'
import './Onama.css'
function Onama() {
    const[showMore, setShowMore] = useState(false);
    let onamaText = "Organizacija koja ima za cilj afirmisanje principa društveno odgovornog poslovanja i održivog poslovanja, te doprinosa integracionim procesima Crne Gore i zemljama Zapadnog Balkana kroz promovisanje podsticajne poslovne klime, njene vrijednosti i značaja, kao i ukazivanje na probleme postizanja društveno odgovornog poslovanja i održivog razvoja u Crnoj Gori, zemljama Zapadnog Balkana i usklađivanja ekonomskog rasta, inkluzivnog i zelenog rasta."
    return(
<div className='onama'>
    <div className='box-onama-text'>
        <h1 className='onama-header'>NVO <span className='green-header'>“Asocijacija za društveno odgovorno poslovanje”</span></h1>
        <p className='onama-text'>{showMore ? onamaText : onamaText.substring(0,186) + "..."}</p>
        <button className='onama-btn' onClick={() => setShowMore(!showMore)}>{showMore ? "← Saznaj manje" : "Saznaj više 🡒"} </button>
        <ContactForm/>
    </div>
    <div>
    <img src={image} className='image-hands' alt='imageHands'/>
    </div>
</div>
    )
}

export default Onama;