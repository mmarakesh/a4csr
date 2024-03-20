import image01 from './image/jovana.png'
import image02 from './image/nina.png'
import image03 from './image/katya.jpg'
import image04 from './image/vanja.jpg'
import image05 from './image/antonina.jpg'
import image06 from './image/marina2.png'
import slika from './image/cuate.png'
import './Tim.css';

function Tim() {

    return (
    <div class="container marketing">
        <h1 className='tim-header'>Upoznajte naš <span className='green-header'>Tim</span></h1>
        <hr className='tim-hr'/>
    <div class="row">
      <div class="col-lg-4 tim-card">
        <img src={image01} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Jovana Bošković</h2>
        <p>Osnivačka članica</p>
        <p><a class="btn btn-success" href="mailto: boskovicjovana1@gmail.com">Pošaljite mail »</a></p>
      </div>
      <div class="col-lg-4 tim-card">
      <img src={image02} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Nina Perunovic</h2>
        <p>Osnivačka članica</p>
        <p><a class="btn btn-success" href="https://www.linkedin.com/in/nina-perunovic-0707/">Linkedin »</a></p>
      </div>
      <div class="col-lg-4 tim-card">
      <img src={image03} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Katya Letunovsky</h2>
        <p>Osnivačka članica</p>
        <p><a class="btn btn-success" href="https://www.linkedin.com/in/katyaletunovsky/">Linkedin »</a></p>
      </div>
      <div class="col-lg-4 tim-card">
      <img src={image04} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Vanja (Abramovic) Jankovic</h2>
        <p>Osnivačka članica</p>
        <p><a class="btn btn-success" href="https://www.linkedin.com/in/vanja-jankovic-8b826a118/">Linkedin »</a></p>
      </div>
      <div class="col-lg-4 tim-card">
      <img src={image05} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Antonina Berkivska</h2>
        <p>Volonterka, umrežavanje i savjetovanje</p>
        <p><a class="btn btn-success" href="https://www.linkedin.com/in/antonina-berkivska/">Linkedin »</a></p>
      </div>
      <div class="col-lg-4 tim-card">
      <img src={image06} alt='jovana' class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <h2 class="fw-normal">Marina Makarova</h2>
        <p>Volonterka, razvoj web stranice</p>
        <p><a class="btn btn-success" href="https://www.linkedin.com/in/marina-makarova-developer/">Linkedin »</a></p>
      </div>
    </div>
    <hr className='tim-hr-two'/>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Naša vrata su uvijek otvorena za one koji dijele naše ideale i spremni su doprinijeti putem volonterskog angažmana.</h2>
        <br/>
        
        
        <div className='tim-form-box'>
        <p class="lead">Vaša podrška nije samo dobrodošli, već je ključna za našu zajedničku misiju izgradnje bolje budućnosti za sve.</p>
        <form className='tim-form'>
          <input className='tim-input' type='text' placeholder='Ime Prezime'/>
          <input className='tim-input' type='email' placeholder='email'/>
          <textarea className='tim-input' type='text' placeholder='Vaša poruka'/>
        </form>
        <button class="tim-btn">Pošaljite »</button>
        </div>

      </div>
      <div class="col-md-5">
        <img src={slika} alt='tim' class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
      </div>
    </div>
    
   </div>
    )

}
export default Tim;