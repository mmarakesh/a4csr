import './Kontakt.css'
function Kontakt() {

    return (
        <div className='kontakt-info'>
        <h4 className='kontakt-header'>NVO “Asocijacija za društveno odgovorno poslovanje”</h4>
        <p className='kontakt-text'>NVO “Asocijacija za društveno odgovorno poslovanje” je organizacija koja ima za cilj afirmisanje principa društveno odgovornog poslovanja i održivog poslovanja, te doprinosa integracionim procesima Crne Gore i zemljama Zapadnog Balkana kroz promovisanje podsticajne poslovne klime, njene vrijednosti i značaja, kao i ukazivanje na probleme postizanja društveno odgovornog poslovanja i održivog razvoja u Crnoj Gori, zemljama Zapadnog Balkana i usklađivanja ekonomskog rasta, inkluzivnog i zelenog rasta.</p>
        <a className='kontakt-form' href='https://docs.google.com/forms/d/e/1FAIpQLScG1dx89hag88t_wh7OnjQZ47S9nnJfzqUK1kN6bbj4YkdTEQ/viewform' target='_blanck' rel="noreferrer">Postani član</a>
        <div className="parallax"></div>
        <div className='kontakt-tel-box'>
        <a className='kontakt-item' href='tel: +493022440550'>Phone: +493-022-440-550</a>
        <a className='kontakt-item' href='tel: +493022440550'>Fax.: +493-022-440-550</a>
        <a className='kontakt-item' href='mailto: association4csr@gmail.com'>email: association4csr@gmail.com</a>
        <p>www.a4csr.com</p> 
        </div>
        <div>
        </div>
        </div>
    )

    }
export default Kontakt;