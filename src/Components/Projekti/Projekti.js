import React, { useRef } from 'react';
import video from './imgProjekti/video.mp4'
import './Projekti.css'

function Projekti() {
  const videoRefs = useRef([]);

  return (
    <>
    <h1 className="projekti-header">Naši <span className='green-header'> projekti</span></h1>
    <div className='video-container'>
    <video className="video-news" ref={(ref) => (videoRefs.current[0] = ref)} src={video} type="video/mp4" loop="loop" muted autoPlay controls/> 
    </div>
    </>
  );
}

export default Projekti;
