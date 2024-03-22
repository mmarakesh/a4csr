import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photoOne from './imgProjekti/photoOne.jpg'
import photoTwo from './imgProjekti/photoTwo.jpg'
import video from './imgProjekti/video.mp4'
import './Projekti.css'

function Projekti() {
  const videoRefs = useRef([]);

  const handleSlide = (index) => {
    // При переходе на другой слайд остановим все видео
    videoRefs.current.forEach((video) => {
      if (video && typeof video.pause === 'function') {
        video.pause();
      }
    });
  };
  return (
    <>
    <h1 className="projekti-header">Naši <span className='green-header'> projekti</span></h1>

    <div className='projekti-bg'>
    <Carousel onSlide={handleSlide} fade className='mx-auto' interval={null}>
      <Carousel.Item >
      <video ref={(ref) => (videoRefs.current[0] = ref)} className="d-block w-100" src={video} type="video/mp4" loop="loop" autoPlay controls/> 
      </Carousel.Item>

      <Carousel.Item > 
      <img className="projecti-img d-block w-100" alt="First slide" src={photoOne}/>
        <Carousel.Caption className='carousel-box'>
          <p className='carousel-text'>Asocijacije za društveno odgovorno poslovanje mr Vanja Janković održala je radionicu zaposlenima na kojoj se razgovaralo o sezoni, područjima za poboljšanja poslovnih praksi i na koji način treba primijeniti DOP (eng. CSR) prakse.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="projecti-img d-block w-100" alt="First slide" src={photoTwo}/>
        <Carousel.Caption className='carousel-box'>
          <p className='carousel-text'>Učenici su imali odlične prezentacije o principima društveno odgovornog poslovanja uzimajući studije slučaja sa svog časa pečenja, studentske kuhinje, transporta, časa umjetnosti i strategije 3R.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
    </div>  
    </>
  );
}

export default Projekti;

// import React from "react";
// import { Carousel } from "react-bootstrap";
// import photoOne from './imgProjekti/photoOne.jpg'
// import photoTwo from './imgProjekti/photoTwo.jpg'
// import video from './imgProjekti/video.mp4'

// function Projekti() {
// <Carousel slide={false}>
//   <Carousel.Item>
//     <img className="d-block w-100" alt="First slide" src={photoOne}/>
//     <Carousel.Caption>
//     <p>Hello World!!!</p>
//   </Carousel.Caption>
//   </Carousel.Item>

//   <Carousel.Item>
//     <img className="d-block w-100" alt="First slide" src={photoTwo}/>
//     <Carousel.Caption>
//     <p>Hello World!!!</p>
//   </Carousel.Caption>
//   </Carousel.Item>

//   <Carousel.Item>
//   <video className="d-block w-100" src={video} autoplay="autoplay" loop="loop" muted defaultMuted playsinline/>
//     <Carousel.Caption>
//     <p>Hello World!!!</p>
//   </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// } 


// export default Projekti;
