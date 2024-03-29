import './Kontakt.css'
function Kontakt() {

    return (
        <div className='kontakt-info'>
        <h4 className='kontakt-header'>NVO “Asocijacija za društveno odgovorno poslovanje”</h4>
        <p className='kontakt-text'>NVO “Asocijacija za društveno odgovorno poslovanje” je organizacija koja ima za cilj afirmisanje principa društveno odgovornog poslovanja i održivog poslovanja, te doprinosa integracionim procesima Crne Gore i zemljama Zapadnog Balkana kroz promovisanje podsticajne poslovne klime, njene vrijednosti i značaja, kao i ukazivanje na probleme postizanja društveno odgovornog poslovanja i održivog razvoja u Crnoj Gori, zemljama Zapadnog Balkana i usklađivanja ekonomskog rasta, inkluzivnog i zelenog rasta.</p>
        <div className="parallax"></div>
        <div className='kontakt-form-box'>
        <a className='kontakt-form gradient-button' href='https://docs.google.com/forms/d/e/1FAIpQLScG1dx89hag88t_wh7OnjQZ47S9nnJfzqUK1kN6bbj4YkdTEQ/viewform' target='_blanck' rel="noreferrer">Postani član</a>
        <p className='kontakt-member'>Članovi A4CSR-a postaju dio grupe koja se zalaže za održivi razvoj, korporativnu odgovornost i društveno solidarne projekte. Plaćanjem članarine pomažete u ostvarenju naših ciljeva. Zauzvrat ćete dobiti ekskluzivne pozivnice za naše događaje i pristup obukama, radionicama i istraživanjima. Imate mogućnost da popunite formular za: 1) redovnog člana i 2) člana prijatelja. REDOVNI ČLAN uplaćuje godišnju članarinu u iznosu od 10€ na žiro račun NVO i dobija člansku kartu. ČLAN PRIJATELJ ne plaća godišnju članarinu i nema ekskluzivne ponude, ali se može uključiti u rad udruženja volontiranjem u realizaciji projekata i redovnim aktivnostima organizacije. Članstvo u NVO A4CSR može ostvariti svako fizičko i pravno lice koje prihvata misiju i poštuje ciljeve i aktivnosti Udruženja. Za više informacija pogledajte Statut NVO A4CSR.</p>
        </div>
        <div className='kontakt-tel-box'>
        {/* <a className='kontakt-item' href='tel: +493022440550'>Phone: +493-022-440-550</a>
        <a className='kontakt-item' href='tel: +493022440550'>Fax.: +493-022-440-550</a> 
        <a className='kontakt-item' href='mailto: association4csr@gmail.com'>email: association4csr@gmail.com</a>
        <p>www.a4csr.com</p>   */}
        </div>
        <div>
        </div>
        </div>
    )

    }
export default Kontakt;