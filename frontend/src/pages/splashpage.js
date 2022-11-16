import React from 'react';
import './splashpage.css';
import PintrestIcon from '../imageComponent/PintrestIcon';

const SplashPage = () => {
  return(
    <div>
      <nav className='splash_nav'>
        <div><PintrestIcon></PintrestIcon></div>
        <div className='splash_nav'>
          <div>
            <div>About</div>
            <div>Business</div>
            <div>Blog</div>
          </div>
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </nav>
      <p>Get Your Next</p>
      <p></p> {/* changing features  */}
      <p></p> {/* Buttons  */}  
      <p></p>
      <p></p>
      <p></p>
      <p></p> {/* images */}
      <p></p> {/* button to go down to next */}
      <p>Here's how it works</p>
    </div>
  )  
}

export default SplashPage;