import React from 'react'
import './navbar.css'; 
import { useSelector,useDispatch} from 'react-redux'
// import { NEWSUBMIT } from '../actions/search.js';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Icons from '../../images/icons';
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
            <div id='navButton'>Home</div>
            <div id='navButton'>Today</div>
            <div id='navButton'>Create</div>
            <form  className='searchBarContainer' onSubmit={handleOnClick}>
                  {/* <img  className='searchIcon' alt onClick={() => console.log("Asd")}  src={searchIcon}></img> */}
                  <input className='searchBar'
                    onChange={(e) => setSearchAndConsole(e)}
                    value={searchTerm}
                    placeholder={"Search"}
                    // ref={searchInput}
                  />
            </form>
            <div id='navIcon'><Icons/></div>
            <div id='navIcon'><Icons/></div>
            <div id='navIcon'><Icons/></div>
        </div>
    </React.Fragment>
  )
}

export default Navbar