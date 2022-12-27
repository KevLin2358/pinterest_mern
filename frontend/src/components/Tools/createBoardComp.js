import React, {useState } from 'react'
import { createBoard } from '../../actions/board_actions'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBoards } from '../../actions/board_actions';

function CreateBoardComp() {
    const dispatch = useDispatch()
    const [board,newBoard] = useState("")
    const stateObj = useSelector(state => state)

    const button1 = () => {
        const newBoard = {
            title:board
        }
        dispatch(createBoard(newBoard)).then(()=> dispatch(fetchBoards(stateObj.session.user.id)))
    }

  return (
    <div>
        <input 
            onSubmit={button1}
            onChange={(e) => newBoard(e.target.value)}
            placeholder="Board name"
        > 
        </input>
        <button onClick={button1}>
            createBoard
        </button>
    </div>
  )
}

export default CreateBoardComp