import { useState } from 'react';
import './Misija.css';
import image from './cuate1.jpg';

function Misija() {
    const[showMore, setShowMore] = useState(false);
    let misijaText = `Naša misija je promovisanje principa društveno odgovornog i održivog poslovanja, kao i doprinos integraciji Crne Gore i zemalja Zapadnog Balkana. 
    Kroz usklađivanje ekonomskog rasta, socijalne inkluzije i zaštite životne sredine, te promociju ljudskih, građanskih, ekonomskih i socijalnih prava, posebno u privatnom sektoru, nastojimo stvoriti okruženje koje podstiče aktivno učešće mladih i zainteresovanih strana.
    Kroz saradnju sa relevantnim subjektima i razvoj civilnog društva na lokalnom i državnom nivou, želimo postići razmjenu iskustava, pružiti stručnu pomoć i pratiti stanje održivog razvoja u skladu sa UN globalnim ciljevima.
    Sve ovo radimo s ciljem unapređenja društveno odgovornog poslovanja i održivog razvoja, ističući važnost relevantnih pregovaračkih poglavlja i aktivnosti za postizanje održivog zajednice.`
    return(
        <div>

        <div className='misija-text-box'>
            <div>
            <img className='image-people' src={image} alt='people'/>
            </div>
            <div className='misija-text'>
            <h1 className="misija-header">Naša <span className='green-header'> misija i ciljevi</span></h1>
            <p>{showMore ? misijaText : misijaText.substring(0, 419) + "..."}</p>
            <button className='misija-btn' onClick={() => setShowMore(!showMore)}>{showMore ? "Saznaj manje" : "Saznaj više »"} </button>
            </div>
        </div>
        </div>
    )
}
export default Misija;