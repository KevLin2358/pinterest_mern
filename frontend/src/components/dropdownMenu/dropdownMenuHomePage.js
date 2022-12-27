import React from 'react'
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

  const handleOnClick2 = (e) => {
    const pinObj = {
      pin: homepagePinId,
      board: e._id
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
                <li>Save2</li>
                <li><ResusableSearch/></li>
                {/* <li><input>asdasd</input></li> */}
                {board.map(boardEle => {
                  return (
                    <div key={boardEle._id} >
                      <li  className='boardName' onClick={() => handleOnClick2(boardEle)}>
                        <div  className="boardlistliCon">
                          <img className='smallimgTest' src={boardEle.image}></img>{boardEle.title}
                        </div>
                      </li>
                    </div>
                  )
                })}
                <CreateBoardComp/>
              </div>

            </ul>

          </li>
        </ul>
      </nav></div>
  )
}

export default DropdownMenuHomePage