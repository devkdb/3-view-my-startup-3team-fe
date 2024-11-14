import React from 'react';
import './index.css';
import homeLogoImage from '../../assets/images/home/MainLogoBig.png';

function HomePage(){
  return (
    <div id="homePage">
      <img className="homeMainLogo" src={homeLogoImage} alt="홈 메인 로고" />
      HomePage
    </div>
  )
}

export default HomePage;
