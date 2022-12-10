import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import "./dropdownMenu.css"
import { Link } from 'react-router-dom'
function DropdownMenu() {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)
  const dispatch = useDispatch()

  const handleOnClick = (e) => {
    // console.log(e)
    const pinObj = {
      pin:pinId,
      board:e._id
    }
    // console.log(pinObj)
    dispatch(createSave(pinObj))
  }


  return (
    <div>
    <nav role="navigation">
    <ul>
      <li><Link to="#"> Dashboard </Link>
          <ul className="dropdown">
            <div className='dropdownContainer'>
            <li>Save</li>
            <li><input></input></li>
            {boardArray.map(board =>{
              return(
                <div key={board.createdAt} className='boardName'>
                  <li  onClick={() => handleOnClick(board)}>{board.title}</li>
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

export default DropdownMenu