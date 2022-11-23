import React, { useEffect,useState } from 'react'
import { createBoard } from '../../actions/board_actions'
import { useDispatch,useSelector } from 'react-redux'
import { createSave } from '../../actions/save_actions'
function InputForms() {
    const dispatch = useDispatch()
    const stateObj = useSelector(state => state)
    useEffect(() => {
        console.log(stateObj)
    }, [stateObj])
    

    const button1 = () => {
        const newBoard = {
            title:"Testing here3"
        }
        dispatch(createBoard(newBoard))
    }

    const button2 = () => {
        dispatch(createSave())
    }

    const button3 = () => {
        dispatch(createBoard())
    }

    const button4 = () => {
        dispatch(createBoard())
    }

    const button5 = () => {
        dispatch(createBoard())
    }

  return (
    <div>
        <button onClick={button1}>
            Button1
        </button>

        <button onClick={button2}>
            Button2
        </button>

        <button onClick={button3}>
            Button3
        </button>

        <button onClick={button4}>
            Button4
        </button>

        <button onClick={button5}>
            Button5
        </button>
    </div>
  )
}

export default InputForms