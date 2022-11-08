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
  const searchFormContainer = useRef(null);


  const setSearchAndConsole = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleOnClick = () => {
    setSearchIsOpen(searchIsOpen => !searchIsOpen)
  }

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm]);


  useEffect(()=>{
    // console.log(window.location.pathname)
    if(searchIsOpen){
    searchInput.current.focus();
    changeCSSName()
    }
 },[searchIsOpen])

  const changeCSSName = () => {
    if(searchIsOpen === true){
      setSearchBarAltClassname("navBarContainerInFocus")
    }
    else{
      setSearchIsOpen(false)
      setSearchBarAltClassname("navBarSearchBar")
    }
  }

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchIsOpen(false)
          setSearchBarAltClassname("navBarSearchBar")
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  }
  

  useOutsideAlerter(searchInput)


  const changeLink = (slashRoute) => {
    // const checkif = (slashRoute) => {
    //   return window.location.pathname === slashRoute
    // }

    // if (!checkif) {
      window.location.href = slashRoute;
    // }

  }

  const onWhichPage = window.location.pathname
  console.log(onWhichPage)

  if (onWhichPage === "/"){
    return (
      <React.Fragment>
          <div className='navBarContainer'>
              <div className='navBarInnerContainer'>
                <div className='navBarLeftSide'>
                  <PintrestIcon/>
                  <div className={"navButton currentPage"} onClick={() => changeLink(`/`)}>Home</div>
                  <div className='navButton' onClick={() => changeLink(`/today`)}>Today</div>
                  <div className='navButton' onClick={() => changeLink(`/profile`)}>Create</div>
                </div>
                <div className={searchBarAltClassname}>
                  <div className='searchSvg'>
                    <SearchSVG />
                  </div>
                  <form ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
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
  else if (onWhichPage === "/today"){
    return (
      <React.Fragment>
          <div className='navBarContainer'>
              <div className='navBarInnerContainer'>
                <div className='navBarLeftSide'>
                  <PintrestIcon/>
                  <div className={"navButton"} onClick={() => changeLink(`/`)}>Home</div>
                  <div className='navButton currentPage' onClick={() => changeLink(`/today`)}>Today</div>
                  <div className='navButton' onClick={() => changeLink(`/profile`)}>Create</div>
                </div>
                <div className={searchBarAltClassname}>
                  <div className='searchSvg'>
                    <SearchSVG />
                  </div>
                  <form ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
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
  else{
    return (
      <React.Fragment>
          <div className='navBarContainer'>
              <div className='navBarInnerContainer'>
                <div className='navBarLeftSide'>
                  <PintrestIcon/>
                  <div className={"navButton"} onClick={() => changeLink(`/`)}>Home</div>
                  <div className='navButton' onClick={() => changeLink(`/today`)}>Today</div>
                  <div className='navButton' onClick={() => changeLink(`/profile`)}>Create</div>
                </div>
                <div className={searchBarAltClassname}>
                  <div className='searchSvg'>
                    <SearchSVG />
                  </div>
                  <form ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
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

}

export default Navbar