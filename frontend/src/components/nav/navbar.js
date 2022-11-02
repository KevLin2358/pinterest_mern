import React from 'react'
import './navbar.css'; 
import { useSelector,useDispatch} from 'react-redux'
// import { NEWSUBMIT } from '../actions/search.js';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Icons from '../../imageComponent/Bell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Icon from '../../imageComponent/Bell';
import PintrestIcon from '../../imageComponent/PintrestIcon';
import Bell from '../../imageComponent/BellSVG';
import Message from '../../imageComponent/MessageSVG';
import Profile from '../../imageComponent/ProfileSVG';
const Navbar = () => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  // const searchInput = useRef(null);
  // const searchFormContainer = useRef(null);


  // const handleSubmitTerm = (e) => {
  //   e.preventDefault()
  //   dispatch(NEWSUBMIT(searchTerm))
  // }

  const handleOnClick = () => {
      console.log("asd")
  }

  const setSearchAndConsole = (e) => {
    setSearchTerm(e.target.value) 
  }

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm]);

  return (
    <React.Fragment>
        <div className='navBarContainer'>
            <React.Fragment className='navBarLeftSide'>
              <PintrestIcon/>
              <div className='navButton'>Home</div>
              <div className='navButton'>Today</div>
              <div className='navButton'>Create</div>
            </React.Fragment>
            <React.Fragment className='navBarSearchBar'>
              <form  className='searchBarContainer' onSubmit={handleOnClick}>
                    {/* <img  className='searchIcon' alt onClick={() => console.log("Asd")}  src={searchIcon}></img> */}
                    <input className='searchBar'
                      onChange={(e) => setSearchAndConsole(e)}
                      value={searchTerm}
                      placeholder={"Search"}
                      // ref={searchInput}
                    />
              </form>
            </React.Fragment>
            <React.Fragment className='navBarRightSide'>
              <Bell/>
              {/* <div id='navIcon'><Icon pictureName={"bell"}/></div> */}
              <Message/>
              <Message/>

              {/* <Profile/> */}
              {/* <div id='navIcon'><Icon pictureName={"push"}/></div> */}
              {/* <div id='navIcon'><Icon pictureName={"user"}/></div> */}
            </React.Fragment>
        </div>
    </React.Fragment>
  )
}

export default Navbar