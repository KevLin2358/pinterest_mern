import React, { useState,useEffect, useRef  } from 'react'
import "./boardPreviewer.css"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
import BoardPreviewerThree from "./boardPreviewerThree.js"
import BoardPreviewerFive from "./boardPreviewerFive.js"
import { fetchBoards } from '../../actions/board_actions'
import { fetchSaves } from '../../actions/save_actions'
import { Link } from 'react-router-dom'


function BoardPreviewer({board}) {

  // const [board,setBoard] = useState("")
  const dispatch = useDispatch()
  const id = useSelector(state => state.session.user.id)
  const [array,setArray] = useState([])
  // useEffect(() => {
  //     dispatch(fetchBoards(id)).then(res =>setBoard(()=>res.boards.data))
  // }, [])

  // console.log("BoardPrev",board)
  // useEffect(() => {
  //   let x 
  //   if(board)
  //     x =  board.forEach(e=> dispatch(fetchSaves(e._id)).then(e => setArray([...array,e.saves.data])))
  // },[board])

  // useEffect(() => {
  //   dispatch(fetchSaves("637d9c5dcc62c5de556cf4cd"))
  // }, [])
  

  if(board === "") return null


  const boardList = board.map(e => {
      return(
      <Link key={e._id}
          to={{
              pathname: `/boards/${e._id}`,
              boardId: e._id
          }}
          >
          <BoardPreviewerFive id={e._id} title={e.title}/>
      </Link>
      )
  })

  return (
    <div className='BoardPreviewerContainer'>
        {boardList}
    </div>
  )
}

export default BoardPreviewer