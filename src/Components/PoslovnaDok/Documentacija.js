import './Documentacija.css'

function Documentacija() {
    return(
        <>
<h1 className="header"> Poslovna <span className='green-header'> documentacija </span></h1>
<p className='document-par'>Dijelimo sa vama dokumentaciju kako bi imali uvid u naš rad.</p>        

<div className='document-box'>
    <p className='document-text'>Godišnji izvještaj</p>
    <button className='document-btn-one'>Otvori dokument</button>
</div> 

<div className='document-box'>
    <p className='document-text'>Statut</p>
    <button className='document-btn-two'>Otvori dokument</button>
</div>   
        </>
    )
}

export default Documentacija;