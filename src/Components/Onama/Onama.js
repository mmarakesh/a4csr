import Formspree from './Formspree';
import image from './imageHands.jpg'
import './Onama.css'
function Onama() {
    return(
<div className='onama'>
    <div className='box-onama-text'>
        <h1 className='onama-header'>NVO <span className='green-header'>“Asocijacija za društveno odgovorno poslovanje”</span></h1>
        <span className='onama-text'> Organizacija koja ima za cilj afirmisanje principa društveno odgovornog poslovanja i održivog poslovanja, te doprinosa integracionim procesima Crne Gore i zemljama Zapadnog Balkana kroz promovisanje podsticajne poslovne klime, njene vrijednosti i značaja, kao i ukazivanje na probleme postizanja društveno odgovornog poslovanja i održivog razvoja u Crnoj Gori, zemljama Zapadnog Balkana i usklađivanja ekonomskog rasta, inkluzivnog i zelenog rasta.</span>
        <Formspree/>
    </div>
    <div>
    <img src={image} className='image-hands' alt='imageHands'/>
    </div>
</div>
    )
}

export default Onama;