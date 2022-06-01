import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videoSpot from './videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={videoSpot} autoPlay loop muted />
      <h1>Let's change the way floor plans are designed!</h1>
      <p>Would you like to join us?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;