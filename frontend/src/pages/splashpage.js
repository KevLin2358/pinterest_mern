import React from 'react';
import './css_reset.css';
import './splashpage.css';
import PintrestIcon2 from '../imageComponent/PintrestIcon2';


const SplashPage = () => {
  return(
    <div className='splashPage'>
    
      <div className='splash_nav_bar'>
        <PintrestIcon2/>
        <div className="pin_word nav_word pin_red">Pintrest</div>
        <div className='splash_about_button'>
          <ul className='nav_about'>
            <div className='nav_word'>About</div>
            <div className='nav_word'>Business</div>
            <div className='nav_word'>Blog</div>
          </ul>
          <button className='nav_button nav_word login'>Log in</button>
          <button className='nav_button nav_word signup'>Sign up</button>
        </div>
      </div>

      <p>Get Your Next</p>
      <div className='yellow_link'>
        <div className='click_transform' role = 'button'>
          <div className='center'>
            <div className='text_work'>Here's how it works</div>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default SplashPage;