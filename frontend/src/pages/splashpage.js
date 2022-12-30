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
      <div className='changing_container'>
        <div className='text_next center'>Get Your Next</div>
        <div className='grid_text1 center'> home decor idea</div>
        <div className='grid'>
            <div className='item dis1'></div>
            <div className='item dis2'></div>
            <div className='item dis3'></div>
            <div className='item dis4'></div>
            <div className='item dis5'></div>
            <div className='item dis6'></div>
            <div className='item dis7'></div>
          </div>
      </div>
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