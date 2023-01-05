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
        <div className='main_text'>
          <div className='text_next center'>Get Your Next</div>
          <div className='grid_text1 center'> home decor idea</div>
        </div>
        <div className='grid'>
            <div className='item dis1 firstitem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis2 seconditem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis3 thirditem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis4 middleitem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis5 thirditem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis6 seconditem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className='item dis7 firstitem'>
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
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