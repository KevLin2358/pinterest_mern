import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import "./dropdownMenu.css"
import { Link } from 'react-router-dom'
import ResusableSearch from '../Tools/resusableSearch'
import CreateBoardComp from '../Tools/createBoardComp'
import ToggleComment from '../../imageComponent/ToggleComment'
function DropdownMenu({showPopup}) {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)
  const [input,setinput] = useState("")

  const dispatch = useDispatch()

  const handleOnClick = (e) => {
    // console.log(e)
    const pinObj = {
      pin: pinId,
      board: e._id
    }
    // console.log(pinObj)
    dispatch(createSave(pinObj))
    showPopup(e.title,pinId)
  }

  console.log()

  const miniBoardList = boardArray.map(boardEle => {
    if (boardEle.title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
    return (
      <div key={boardEle._id} >
        <li  className='boardName' onClick={() => handleOnClick(boardEle)}>
          <div  className="boardlistliCon">
            <img className='smallimgTest' src={boardEle.image} alt=""></img>{boardEle.title}
            {/* <Popup/> */}
          </div>
        </li>
      </div>
    )
  })

  return (
<div>
      <nav role="navigation">
        <ul>
          <li className='dropdownmenudiv'><Link to="#" className='dropdownmenudivText2' > <span className="text">Boards</span>
  <span className="symbol"><ToggleComment/></span> </Link>
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

export default DropdownMenu