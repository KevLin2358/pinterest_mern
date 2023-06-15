import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSave } from '../../actions/save_actions';
import { Link } from 'react-router-dom';
import CreateBoardComp from '../Tools/createBoardComp';
import ResusableSearch from '../Tools/resusableSearch';
import './dropdownMenu.css';
import Popup from './popup'
import './popup.css';
function DropdownMenuHomePage({ board, homepagePinId,showPopup }) {
  const stateObj = useSelector((state) => state)
  const dispatch = useDispatch()
  const [input,setinput] = useState("")


  const handleOnClick2 = (e) => {
    const pinObj = {
      pin: homepagePinId,
      board: e._id
    }
    dispatch(createSave(pinObj))
    showPopup(e.title,homepagePinId)
  }


  
  if (!stateObj || !board) {
    return null;
  }


    const miniBoardList = board.map(boardEle => {
      if (boardEle.title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
        return (
          <div key={boardEle._id}>
            <li className='boardName' onClick={() => handleOnClick2(boardEle)}>
              <div className="boardlistliCon">
                <img className='smallimgTest' src={boardEle.image} alt="" />
                {boardEle.title}
                <button className="saveButton">Save</button>
              </div>
            </li>
          </div>
        );
      }
    });




  return (
<div>
  <nav role="navigation">
    <ul>
      {/* Dropdown Menu */}
      <li className='dropdownmenudiv'>
        {/* Dropdown Menu Title */}
        <Link to="#" className='dropdownmenudivText'>Boards</Link>
        {/* Dropdown Menu Content */}
        <ul className="dropdown">
          <div className='dropdownContainer'>
            {/* Dropdown Menu Item */}
            <li className='dropdownContainerCenter topleftTopright'>Save</li>
            {/* Dropdown Menu Item */}
            {/* <Popup/> */}
            <li className='dropdownContainerCenter'>
              <ResusableSearch input={input} setinput={setinput} />
            </li>
            {/* Dropdown Menu Item */}
            <div className='miniBoardList'>
              {miniBoardList}
            </div>
            {/* Dropdown Menu Item */}
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