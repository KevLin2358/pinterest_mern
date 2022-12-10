import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import { useEffect } from 'react'
import Q from "../../imageComponent/images/q.jpg"
import { Link } from 'react-router-dom'
import "./dropdownMenu.css"
function DropdownMenuHomePage({board,homepagePinId}) {
  const stateObj = useSelector((state) => state)
  const pinId = useSelector((e) => stateObj.session.user.id)
  const dispatch = useDispatch()

  const handleOnClick2 = (e) => {
    const pinObj = {
      pin:homepagePinId,
      board:e._id
    }
    dispatch(createSave(pinObj))
  }
  if (!stateObj) return null
  if (!board) return null

  return (
    <div>
    <nav role="navigation">
    <ul>
      <li className='dropdownmenudiv'><Link to="#" className='dropdownmenudivText'> Dashboard </Link>
          <ul className="dropdown">
            <div className='dropdownContainer'>
            <li>Save</li>
            {/* <li><input>asdasd</input></li> */}
            {board.map(boardEle =>{
              return(
                <div key={boardEle.createdAt}  >
                  <li className='boardName'  onClick={() => handleOnClick2(boardEle)}>
                    <div className="boardlistliCon">
                      <img className='smallimgTest' src={Q}></img>{boardEle.title}
                    </div>
                    </li>
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