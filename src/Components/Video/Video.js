import React, { useRef } from 'react';
import video from './video.mp4'
import './Video.css'

function Video() {
  const videoRefs = useRef([]);

  return (
    <>
    <h1 className="projekti-header">Naši <span className='green-header'> vijesti</span></h1>
    <div className='video-container'>
    <video className="video-vjesti" ref={(ref) => (videoRefs.current[0] = ref)} src={video} type="video/mp4" loop="loop" muted autoPlay controls/> 
    </div>
    </>
  );
}

export default Video;
