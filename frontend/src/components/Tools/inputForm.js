import React, { useEffect,useState } from 'react'
import { createBoard } from '../../actions/board_actions'
import { useDispatch,useSelector } from 'react-redux'
import { createSave } from '../../actions/save_actions'
import { fetchBoard,fetchBoards } from '../../actions/board_actions'
function InputForms() {
    const dispatch = useDispatch()
    const stateObj = useSelector(state => state)
    const [id,setID] = useState(stateObj.session.user.id)
    const [board,newBoard] = useState("")



    // useEffect(() => {
    //     console.log(stateObj)
    //     if(stateObj){
    //         setID(()=>stateObj.session.user.id)
    //     }
    // }, [stateObj])


    useEffect(() => {
        if(board === "" && stateObj){
            dispatch(fetchBoards(id)).then(res => newBoard(res.boards.data))
        }
    }, [])

    // useEffect(()=> {
    //     if (board !== "" && defaultoBoardId === ""){
    //         let x = board.filter(e => e.default === true)
    //         setdefaultBoardId(() =>(x[0]._id))
    //     }
    // })
    

    const button1 = () => {
        const newBoard = {
            title:board
        }
        dispatch(createBoard(newBoard))
    }

    const button2 = () => {
        dispatch(createSave())
    }

    const button3 = () => {
        console.log(id)
        dispatch(fetchBoard(id))
    }

    const button4 = () => {
        dispatch(fetchBoards(id))
    }

    const button5 = () => {
        console.log()
    }

  return (
    <div >
        <input 
            onSubmit={button1}
            onChange={(e) => newBoard(e.target.value)}
            placeholder="Board name"
        > 
        </input>
        <button onClick={button1}>
            createBoard
        </button>

        <button onClick={button2}>
            createSave
        </button>

        <button onClick={button3}>
            fetchBoard
        </button>

        <button onClick={button4}>
            fetchBoards
        </button>

        <button onClick={button5}>
            Button5
        </button>
    </div>
  )
}

export default InputForms