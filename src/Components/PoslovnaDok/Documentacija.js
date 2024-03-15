import React from 'react';
import myPDF from './Statut.pdf';
import './Documentacija.css'

function Documentacija() {
    const openPdfTwo = () => {
        window.open(myPDF, '_blank');
    };

    return (
        <div>
            <h1 className="doc-header"> Poslovna <span className='green-header'> documentacija </span></h1>
            <p className='document-par'>Dijelimo sa vama dokumentaciju kako bi imali uvid u naš rad.</p>

            <div className='document-box'>
                <p className='document-text'>Godišnji izvještaj</p>
                <button className='document-btn-one' onClick={() => window.open('link-to-godisnji-izvjestaj.pdf', '_blank')}>Otvori dokument</button>
            </div>

            <div className='document-box'>
                <p className='document-text'>Statut</p>
                <button className='document-btn-two' onClick={openPdfTwo}>Otvori dokument</button>
            </div>
        </div>
    );
}

export default Documentacija;