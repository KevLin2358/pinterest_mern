import React, { useState,useEffect, useRef  } from 'react'
import "./boardPreviewer.css"
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
import gray from "../../imageComponent/images/gray.png"
import { fetchBoards } from '../../actions/board_actions'
import { fetchSaves } from '../../actions/save_actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import BoardPreviewerThree from './boardPreviewerThree'
import { fetchSavesWithLimitFive } from '../../actions/save_actions'
function BoardPreviewerFive({id,title}) {
  const dispatch = useDispatch()
  const [array,setArray] = useState([])
  useEffect(() => {
    dispatch(fetchSavesWithLimitFive(id)).then((e) => setArray(e.saves.data))
  }, [])

  let obj = {
    image:gray
  }

  console.log(array)
  // console.log(array[0].image)
  // if (array.length < 5) return null
  if (array[4]){
    return (
      <div>
        <div className='collab'>
            <img src={array[0].image}></img>
            <img src={array[1].image}></img>
            <img src={array[2].image}></img>
            <img src={array[3].image}></img>
            <img src={array[4].image}></img>
            {/* <img src={r}></img>
            <img src={w}></img>
            <img src={t}></img>
            <img src={t}></img> */}
        </div>
        <div className='boardNames'>{title}</div>
        <div className='boardLength'>{array.length}+ pins</div>
      </div>
    ) 
  }
  else if (array[2]){
    return (
      <BoardPreviewerThree one={array[0]} two={array[1]} three={array[2]} title={title} size={array.length}/>
    )
  }
  else if (array[1]){
    return (
      <BoardPreviewerThree one={array[0]} two={array[1]} three={obj} title={title} size={array.length}/>
    )
  }
  else if (array[0]){
    return (
      <BoardPreviewerThree one={array[0]} two={obj} three={obj} title={title} size={array.length}/>
    )
  }
  else{
    <BoardPreviewerThree one={obj} two={obj} three={obj} title={title} size={0}/>
  }
}

export default BoardPreviewerFive