import React, { useState,useEffect, useRef  } from 'react'
import Navbar from '../components/nav/navbar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUserPin } from '../actions/pin_actions'
import { fetchBoards } from '../actions/board_actions'
import { fetchSaves } from '../actions/save_actions'
import { fetchSinglePin } from '../actions/pin_actions'
import { fetchSavesIDwithBoardID } from '../actions/save_actions'
import { deleteBoard } from '../actions/board_actions'
import { patchBoard } from '../actions/board_actions'
import Pins from '../components/pin/pins'
import "./homepage.css"
function BoardPage(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const id = useSelector(state => state.session.user.id)
    const [allboard,setAllBoard] = useState(null)
    const [pins,setPins] = useState([])
    const [saves,setSaves] = useState(null)
    const [savesId,setSavesId] = useState(null)
    const ref = useRef(null)
    const [saveIDandPin,setsaveIDandPin] = useState(null)
    const [currentBoardTitle,setcurrentBoardTitle] = useState(null)
    const [boardName,setboardName] = useState(null)

    useEffect(() => {
        if(allboard){
            const currentBoardID = (window.location.pathname.split("/")[2])
            let newList = allboard.filter(e => e._id === currentBoardID)
            setboardName(newList[0].title)
        }
    },[allboard])

    useEffect(() => {
        //fetching pins
        dispatch(fetchSaves(props.match.params.boardId)).then(res => setSaves(res.saves.data))
        //fetching saveIDWithBoardI cause I need to pass saveId down to pin for unsave to show
        dispatch(fetchSavesIDwithBoardID(props.match.params.boardId)).then(res => setSavesId(res.saves.data))
    }, [])

    //fetching board so I can pass it down to the pins for drop down
    useEffect(() => {
        if(state && state.board){
            setAllBoard(state.board.data)
        }
    }, [state])

    // useEffect(() => {
    //     if(!currentBoardTitle && allboard){
    //         console.log(allboard)
    //         const boardPath = (window.location.pathname.split("/")[2])
    //         let result = allboard.filter(e => e._id === boardPath)
    //         setcurrentBoardTitle((e) => result[0].title)
    //     }
    // }, [allboard])
    

    

    if (saves === null) return null
    if (savesId === null) return null
    if (allboard === null) return null
    // console.log(saves,savesId)

    const saveIDwithPinIDobj = () => {
        let obj = {}
        let finalArray = {}
        for (let index = 0; index < saves.length; index++) {
            const element = saves[index]._id;
            obj[element] = true
        }
        // console.log(obj)
        for (let index = 0; index < savesId.length; index++) {
            const element = savesId[index].pin;
            if(obj[element]){
                finalArray[savesId[index].pin]=savesId[index]._id
            }
        }
        setsaveIDandPin(() => finalArray)
    }

    const handleDeleteBoard = () => {
        const currentBoardID = (window.location.pathname.split("/")[2])
        // console.log(currentBoardID)
        dispatch(deleteBoard(currentBoardID))
        let test = window.location.href = '/profile'
        console.log(test)
        // window.location.href = "http://www.w3schools.com";
    }

    const handleEditName = () => {
        const currentBoardID = (window.location.pathname.split("/")[2])
        const newObj = {
            id:currentBoardID,
            title:currentBoardTitle
        }
        setboardName(currentBoardTitle)
        dispatch(patchBoard(newObj))
        // window.location.reload(false)
    }

    if(saveIDandPin === null){
        saveIDwithPinIDobj()
    }

    if (saveIDandPin === null) return null
    let saveList = saves.map((pin) => {
        return(
            <Pins url={pin} board={allboard} key={pin._id} pinSaveId={saveIDandPin[pin._id]}/>
        )
    } )
    return (
    <div>
    <Navbar/>
    <React.Fragment>
    <div className='boardTitle'>{boardName}</div>
        <div ref={ref} className='homePageContainer'>
            <button onClick={handleDeleteBoard}>Delete this board</button>
            <input onChange={(e) => setcurrentBoardTitle(e.target.value)}></input>
            <button onClick={handleEditName}>Edit this board</button>
        <div className='homePageBodyFlex'>
            <div className='homePageBody'>
            {saveList}
            </div>
        </div>
    </div>
    </React.Fragment>
    </div>
  )
}

export default BoardPage