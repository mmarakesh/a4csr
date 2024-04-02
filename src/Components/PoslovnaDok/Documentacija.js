import React from 'react';
import myPDF from './Report.pdf';
import PDF from './Statut.pdf';
import './Documentacija.css'

function Documentacija() {
    const openPdfOne = () => {
        window.open(myPDF, '_blank');
    };
    const openPdfTwo = () => {
        window.open(PDF, '_blank');
    };

    return (
            
        <div className='doc-container'>
            <h1 className="doc-header"> Poslovna <span className='green-header'> dokumentacija </span></h1>
            <p className='document-par'>Dijelimo sa vama dokumentaciju kako bi imali uvid u naš rad.</p>
            
            <hr className='doc-hr'/>
            
            <div className='document-box'>
                <p className='document-text'>Godišnji izvještaj</p>
                <button className='document-btn-one' onClick={openPdfOne}>Otvori dokument</button>
            </div>

            <div className='document-box'>
                <p className='document-text'>Statut</p>
                <button className='document-btn-two' onClick={openPdfTwo}>Otvori dokument</button>
            </div>
        </div>
    );
}

export default Documentacija;