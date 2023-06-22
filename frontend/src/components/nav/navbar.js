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
import Modal from '../modal/modal';
import { userID } from '../../actions/session_actions';
import { fetchBoards } from '../../actions/board_actions';
import { logout } from '../../actions/session_actions';
const Navbar = () => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const [searchIsOpen,setSearchIsOpen] = useState(false)
  const searchInput = useRef(null);
  const [searchBarAltClassname,setSearchBarAltClassname] = useState("navBarSearchBar")
  const searchFormContainer = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const stateObj = useSelector(state => state)

  const setSearchAndConsole = (e) => {
    setSearchTerm(e.target.value)
    // console.log(searchTerm)
  }

  const onSearch = (e) =>{
    // window.location.href = `/search/${searchTerm}`
    e.preventDefault();
    console.log("asdwasdwasdwasdwasdw")
    console.log(searchTerm)
    window.location.href = `http://localhost:3000/search/${searchTerm}`;
  }

  // useEffect(() => {
  //   console.log(searchTerm);
  // }, [searchTerm]);
  

  const handleOnClick = () => {
    setSearchIsOpen(searchIsOpen => !searchIsOpen)
  }

  const logoutFunction = () => {
    dispatch(logout())
    window.location.href = '/login';
    // console.log("logout")
  }

  useEffect(() => {
    // console.log(searchTerm)
  }, [searchTerm]);

  useEffect(() =>{
    if (stateObj.session.user.id){
      dispatch(userID(stateObj.session.user.id))
    }
  },[])

  useEffect(() => {
    if (stateObj.session.user.id){
      dispatch(fetchBoards(stateObj.session.user.id))
    }
  }, [])


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
      window.location.href = slashRoute;
  }

  const infoBox = () => {
    setModalOpen(() => !modalOpen);
  }

  const handleSearchBarClick = () => {
    searchInput.current.focus();
    handleOnClick()
  };

  const onWhichPage = window.location.pathname
  // console.log(onWhichPage)
  // if (onWhichPage === "/"){
  // if (true){
    return (
      <React.Fragment>
          <div className='navBarContainer'>
              <div className='navBarInnerContainer'>
                <div className='navBarLeftSide'>
                  <PintrestIcon/>
                  <div className={"navButton currentPage"} onClick={() => changeLink(`/`)}>Home</div>
                  <div className='navButton' onClick={() => changeLink(`/today`)}>Today</div>
                  <div className='navButton' onClick={() => changeLink(`/create`)}>Create</div>
                </div>
                <div className={searchBarAltClassname} onClick={handleSearchBarClick}>
                  <div className='searchSvg'>
                    <SearchSVG />
                  </div>
                  <form onSubmit={(e) => onSearch(e)}>
                  <div ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick}>
                        <input className='searchBar'
                          onChange={(e) => setSearchAndConsole(e)}
                          
                          value={searchTerm}
                          placeholder={"Search"}
                          ref={searchInput}
                        />
                  </div>
                  </form>

                </div>
                <div className='navBarRightSide'>
                  <div onClick={infoBox}><Bell/></div>
                  <div onClick={logoutFunction}><Message/></div>
                  <div onClick={() => changeLink(`/profile`)}><Message/></div>
                  {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
              </div>
          </div>
      </React.Fragment>
    )
  }
  // else if (onWhichPage === "/today"){
  //   return (
  //     <React.Fragment>
  //       <div className='navBarContainer'>
  //           <div className='navBarInnerContainer'>
  //             <div className='navBarLeftSide'>
  //               <PintrestIcon/>
  //               <div className={"navButton"} onClick={() => changeLink(`/`)}>Home</div>
  //               <div className='navButton currentPage' onClick={() => changeLink(`/today`)}>Today</div>
  //               <div className='navButton' onClick={() => changeLink(`/create`)}>Create</div>
  //             </div>
  //             <div className={searchBarAltClassname}>
  //               <div className='searchSvg'>
  //                 <SearchSVG />
  //               </div>
  //               <div ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} >
  //                     <input className='searchBar'
  //                       onChange={(e) => setSearchAndConsole(e)}
  //                       value={searchTerm}
  //                       placeholder={"Search"}
  //                       ref={searchInput}
  //                     />
  //               </div>
  //             </div>
  //             <div className='navBarRightSide'>
  //               <div onClick={infoBox}><Bell/></div>
  //               <div onClick={logoutFunction}><Message/></div>
  //               <div onClick={() => changeLink(`/profile`)}><Message/></div>
  //               {modalOpen && <Modal setOpenModal={setModalOpen} />}
  //             </div>
  //           </div>
  //       </div>
  //   </React.Fragment>
  //   )
  // }
  // else if (onWhichPage === "/create"){
  //   return (
  //     <React.Fragment>
  //       <div className='navBarContainer'>
  //           <div className='navBarInnerContainer'>
  //             <div className='navBarLeftSide'>
  //               <PintrestIcon/>
  //               <div className={"navButton"} onClick={() => changeLink(`/`)}>Home</div>
  //               <div className='navButton ' onClick={() => changeLink(`/today`)}>Today</div>
  //               <div className='navButton currentPage' onClick={() => changeLink(`/create`)}>Create</div>
  //             </div>
  //             <div className={searchBarAltClassname}>
  //               <div className='searchSvg'>
  //                 <SearchSVG />
  //               </div>
  //               <div ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
  //                     <input className='searchBar'
  //                       onChange={(e) => setSearchAndConsole(e)}
  //                       value={searchTerm}
  //                       placeholder={"Search"}
  //                       ref={searchInput}
  //                     />
  //               </div>
  //             </div>
  //             <div className='navBarRightSide'>
  //               <div onClick={infoBox}><Bell/></div>
  //               <div onClick={logoutFunction}><Message/></div>
  //               <div onClick={() => changeLink(`/profile`)}><Message/></div>
  //               {modalOpen && <Modal setOpenModal={setModalOpen} />}
  //             </div>
  //           </div>
  //       </div>
  //   </React.Fragment>
  //   )
    
  // }
  // else{
  //   return (
  //     <React.Fragment>
  //       <div className='navBarContainer'>
  //           <div className='navBarInnerContainer'>
  //             <div className='navBarLeftSide'>
  //               <PintrestIcon/>
  //               <div className={"navButton"} onClick={() => changeLink(`/`)}>Home</div>
  //               <div className='navButton ' onClick={() => changeLink(`/today`)}>Today</div>
  //               <div className='navButton ' onClick={() => changeLink(`/create`)}>Create</div>
  //             </div>
  //             <div className={searchBarAltClassname}>
  //               <div className='searchSvg'>
  //                 <SearchSVG />
  //               </div>
  //               <div ref={searchFormContainer} className='searchBarContainer'onClick={handleOnClick} onSubmit={handleOnClick}>
  //                     <input className='searchBar'
  //                       onChange={(e) => setSearchAndConsole(e)}
  //                       value={searchTerm}
  //                       placeholder={"Search"}
  //                       ref={searchInput}
  //                     />
  //               </div>
  //             </div>
  //             <div className='navBarRightSide'>
  //               <div onClick={infoBox}><Bell/></div>
  //               <div onClick={logoutFunction}><Message/></div>
  //               <div onClick={() => changeLink(`/profile`)}><Message/></div>
  //               {modalOpen && <Modal setOpenModal={setModalOpen} />}
  //             </div>
  //           </div>
  //       </div>
  //   </React.Fragment>
    // )
  // }
// }

export default Navbar