import React, {useState } from 'react'
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