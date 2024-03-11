import './Misija.css';
import image from './imagePeople.jpg';

function Misija() {
    return(
        <div>
<h1 className="header">Naša <span className='green-header'> misija i ciljevi</span></h1>
        <div className='misija-text'>
            <div>
            <img className='image-people' src={image} alt='people'/>
            </div>
            <div className='misija-text-box'>
            <p> Naša misija je promovisanje principa društveno odgovornog i održivog poslovanja, kao i doprinos integraciji Crne Gore i zemalja Zapadnog Balkana. </p>
            <p>Kroz usklađivanje ekonomskog rasta, socijalne inkluzije i zaštite životne sredine, te promociju ljudskih, građanskih, ekonomskih i socijalnih prava, posebno u privatnom sektoru, nastojimo stvoriti okruženje koje podstiče aktivno učešće mladih i zainteresovanih strana.</p>
            <p>Kroz saradnju sa relevantnim subjektima i razvoj civilnog društva na lokalnom i državnom nivou, želimo postići razmjenu iskustava, pružiti stručnu pomoć i pratiti stanje održivog razvoja u skladu sa UN globalnim ciljevima.</p>
            <p>Sve ovo radimo s ciljem unapređenja društveno odgovornog poslovanja i održivog razvoja, ističući važnost relevantnih pregovaračkih poglavlja i aktivnosti za postizanje održivog zajednice.</p>
            </div>
        </div>
        </div>
    )
}
export default Misija;