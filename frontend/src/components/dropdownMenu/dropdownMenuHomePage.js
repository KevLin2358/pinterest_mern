import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import { useEffect } from 'react'
import Q from "../../imageComponent/images/q.jpg"
import { Link } from 'react-router-dom'
import CreateBoardComp from '../Tools/createBoardComp'
import "./dropdownMenu.css"
import ResusableSearch from '../Tools/resusableSearch'
import Popup from './popup'
import './popup.css';
function DropdownMenuHomePage({ board, homepagePinId,showPopup }) {
  const stateObj = useSelector((state) => state)
  const dispatch = useDispatch()
  const [input,setinput] = useState("")
  // const [isOpen,setIsOpen] = useState(true)
  // // const [show,setshow] = useState(false)
  // console.log(input)

  const handleOnClick2 = (e) => {
    const pinObj = {
      pin: homepagePinId,
      board: e._id
    }
    dispatch(createSave(pinObj))
    showPopup(e.title,homepagePinId)
  }
  if (!stateObj) return null
  if (!board) return null

  // const showPopup = () => {
  //   setshow(true)

  //   setTimeout(() => {
  //     setshow(false)
  //   }, 2000);
  // }

    const miniBoardList = board.map(boardEle => {
      if (boardEle.title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
      return (
        <div key={boardEle._id} >
          <li  className='boardName' onClick={() => handleOnClick2(boardEle)}>
            <div  className="boardlistliCon">
              <img className='smallimgTest' src={boardEle.image} alt=""></img>{boardEle.title}
              <button class="saveButton">Save</button>
            </div>
          </li>
        </div>
      )
    })
  
  // console.log(show)

  return (
    <div>
      <nav role="navigation">
        <ul>
          <li className='dropdownmenudiv'><Link to="#" className='dropdownmenudivText' > Boards </Link>
            <ul className="dropdown">
              <div className='dropdownContainer'>
                <li className='dropdownContainerCenter topleftTopright'>Save</li>
                {/* <Popup/> */}
                <li className='dropdownContainerCenter'><ResusableSearch input={input} setinput={setinput}/></li>
                <div className='miniBoardList'>
                {miniBoardList}
                </div>
                <CreateBoardComp/>
              </div>
            </ul>
          </li>
        </ul>
      </nav>

      </div>
  )
}

export default DropdownMenuHomePage