import React from 'react'
import './navbar.css'; 
import { useSelector,useDispatch} from 'react-redux'
// import { NEWSUBMIT } from '../actions/search.js';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Icons from '../../imageComponent/Bell';
// import Icon from '../../imageComponent/Bell';
import PintrestIcon from '../../imageComponent/PintrestIcon';
import Bell from '../../imageComponent/BellSVG';
import Message from '../../imageComponent/MessageSVG';
import Profile from '../../imageComponent/ProfileSVG';
import SearchSVG from '../../imageComponent/SearchSVG';
const Navbar = () => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const [searchIsOpen,setSearchIsOpen] = useState(false)
  const searchInput = useRef(null);
  const [searchBarAltClassname,setSearchBarAltClassname] = useState("navBarSearchBar")
  // const searchInput = useRef(null);
  // const searchFormContainer = useRef(null);


  // const handleSubmitTerm = (e) => {
  //   e.preventDefault()
  //   dispatch(NEWSUBMIT(searchTerm))
  // }

  const setSearchAndConsole = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleOnClick = () => {
    // console.log(window)
    setSearchIsOpen(searchIsOpen => !searchIsOpen)
    // console.log(searchIsOpen)
  }

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm]);


  useEffect(()=>{
    // current property is refered to input element
    if(searchIsOpen){
    searchInput.current.focus();
    changeCSSName()
    console.log("This is open")
    }
 },[searchIsOpen])

  const changeCSSName = () => {
    if(searchIsOpen === true){
      setSearchBarAltClassname("navBarContainerInFocus")
    }
  }




  return (
    <React.Fragment>
        <div className='navBarContainer'>
            <div className='navBarInnerContainer'>
              <div className='navBarLeftSide'>
                <PintrestIcon/>
                <div className='navButton'>Home</div>
                <div className='navButton'>Today</div>
                <div className='navButton'>Create</div>
              </div>
              <div className={searchBarAltClassname}>
                <div className='searchSvg'>
                  <SearchSVG />
                </div>
                <form  className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
                      <input className='searchBar'
                        onChange={(e) => setSearchAndConsole(e)}
                        value={searchTerm}
                        placeholder={"Search"}
                        ref={searchInput}
                      />
                </form>
              </div>
              <div className='navBarRightSide'>
                <Bell/>
                <Message/>
                <Message/>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Navbar