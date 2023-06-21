import React, {useState,useRef } from 'react'
import { createBoard } from '../../actions/board_actions'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBoards } from '../../actions/board_actions';

function CreateBoardComp() {
    const dispatch = useDispatch()
    const [board,newBoard] = useState("")
    const stateObj = useSelector(state => state)



    //This button creates a new board and then fetchboards again
    //fetchboards cause board is from redux state , need it to cause a rerender
    //need to add modal for style

    const button1 = (e) => {
        e.preventDefault();
        if (board.length !== 0) {
          const newBoard = {
            title: board
          };
          dispatch(createBoard(newBoard)).then(() =>
            dispatch(fetchBoards(stateObj.session.user.id))
          );
        }else{
            console.log("enter title")
            inputRef.current.focus();
        }
      };
      
    const inputRef = useRef(null);


  return (
<div className='createBoardContainer'>
    <form onSubmit={button1}>
        <input
        className='bottomleft'
        onChange={(e) => newBoard(e.target.value)}
        placeholder="Create New Board"
        ref={inputRef}
        />
    </form>
    <button className={`createButton ${board ? 'red' : 'gray'}`} onClick={button1}>
        Create
    </button>
    </div>
    )
}

export default CreateBoardComp