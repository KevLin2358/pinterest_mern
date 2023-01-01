import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import { useEffect } from 'react'
import Q from "../../imageComponent/images/q.jpg"
import { Link } from 'react-router-dom'
import CreateBoardComp from '../Tools/createBoardComp'
import "./dropdownMenu.css"
import ResusableSearch from '../Tools/resusableSearch'

function DropdownMenuHomePage({ board, homepagePinId }) {
  const stateObj = useSelector((state) => state)
  const dispatch = useDispatch()
  const [input,setinput] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  console.log(input)

  const handleOnClick2 = (e) => {
    const pinObj = {
      pin: homepagePinId,
      board: e._id
    }
    dispatch(createSave(pinObj))
  }
  if (!stateObj) return null
  if (!board) return null


    const miniBoardList = board.map(boardEle => {
      if (boardEle.title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
      return (
        <div key={boardEle._id} >
          <li  className='boardName' onClick={() => handleOnClick2(boardEle)}>
            <div  className="boardlistliCon">
              <img className='smallimgTest' src={boardEle.image} alt="firstpicture"></img>{boardEle.title}
            </div>
          </li>
        </div>
      )
    })
  console.log(isOpen)
  return (
    <div onClick={() => setIsOpen(() => !isOpen)}>Dashboard2
      {isOpen &&
      <div>
      <nav role="navigation">
        <ul>
          <li className='dropdownmenudiv'><Link to="#" className='dropdownmenudivText' > Dashboard2 </Link>
           <ul className="dropdown">
            <div className='dropdownContainer'>
              <li className='dropdownContainerCenter topleftTopright'>Save2</li>
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
      }
</div>
  )
}

export default DropdownMenuHomePage