import React from 'react';
import '../App.css';
import { Button2 } from './Button2';
import { Button3 } from './Button3';
import { Button5 } from "./Button5";
import { Button6 } from "./Button6";
import './HeroSection3.css';
import vid from "../videos/video-2.mp4";

function HeroSection3() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>Collaborate with TRVL</h1>
      <p>To make sure your trip is Amazing</p>
      <div className='hero-btns'>
        <Button5
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Check Merchandise
        </Button5>
        <Button6
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
           View Offers {/*<i className='far fa-play-circle' /> */}
        </Button6>
      </div>
    </div>
  );
}

export default HeroSection3;