import React from 'react'
import { useSelector } from 'react-redux'
import "./dropdownMenu.css"
function DropdownMenu() {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)

  const handleOnClick = (e) => {
    console.log(e,)
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
            {boardArray.map(board =>{
              return(
                <li onClick={() => handleOnClick(board)}>{board.title}</li>
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