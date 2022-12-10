import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./dropdownMenu.css"
function DropdownMenuHomePage({board,homepagePinId}) {
  const stateObj = useSelector((state) => state)
  const pinId = useSelector((e) => stateObj.session.user.id)
  const dispatch = useDispatch()

  const handleOnClick2 = (e) => {
    // console.log(e)
    const pinObj = {
      pin:homepagePinId,
      board:e._id
    }
    // console.log(pinObj)
    dispatch(createSave(pinObj))
  }
  // console.log(board)
  if (!stateObj) return null
  if (!board) return null

  return (
    <div>
    <nav role="navigation">
    <ul>
      <li><Link to="#"> Dashboard </Link>
          <ul className="dropdown">
            <div className='dropdownContainer'>
            <li>Save</li>
            {/* <li><input>asdasd</input></li> */}
            {board.map(boardEle =>{
              return(
                <div key={boardEle.createdAt} className='boardName'>
                  <li  onClick={() => handleOnClick2(boardEle)}>{boardEle.title}</li>
                </div>
              )
            })}
            </div>

          </ul>

      </li>
    </ul>
  </nav></div>
  )
}

export default DropdownMenuHomePage