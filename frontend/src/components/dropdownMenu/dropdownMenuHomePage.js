import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import "./dropdownMenu.css"
function DropdownMenuHomePage({board}) {
  const pinId = useSelector(state => state.pin.data._id)
  const dispatch = useDispatch()

  const handleOnClick = (e) => {
    console.log(e)
    const pinObj = {
      pin:pinId,
      board:e._id
    }
    dispatch(createSave(pinObj))
  }


  return (
    <div>
    <nav role="navigation">
    <ul>
      <li><a href="#">Boards</a>
          <ul className="dropdown">
            <div className='dropdownContainer'>
            <li>Save</li>
            <li><input></input></li>
            {board.map(boardEle =>{
              return(
                <div key={boardEle.createdAt} className='boardName'>
                  <li  onClick={() => handleOnClick(boardEle)}>{boardEle.title}</li>
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