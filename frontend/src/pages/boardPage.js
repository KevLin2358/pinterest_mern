import React, { useState,useEffect, useRef  } from 'react'
import Navbar from '../components/nav/navbar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUserPin } from '../actions/pin_actions'
import { fetchBoards } from '../actions/board_actions'
import { fetchSaves } from '../actions/save_actions'
import { fetchSinglePin } from '../actions/pin_actions'
import { fetchSavesIDwithBoardID } from '../actions/save_actions'
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

    useEffect(() => {
        // dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
        dispatch(fetchSaves(props.match.params.boardId)).then(res => setSaves(res.saves.data))
    }, [])

    useEffect(() => {
        // dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
        dispatch(fetchSavesIDwithBoardID(props.match.params.boardId)).then(res => setSavesId(res.saves.data))
    }, [])

    useEffect(() => {
        if (saves && savesId){
            
        }
    }) 

    // useEffect(()=>{
    //     if (saves !== ""){
    //         saves.map(e => dispatch(fetchSinglePin(e.pin)).then((res => {
    //             // console.log(pins)
    //             setPins(pins => [...pins, res.pins.data])
    //         })))
    //     }

    useEffect(() => {
        if(state && state.board){
            setAllBoard(state.board.data)
        }
    }, [state])
    


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

    if(saveIDandPin === null){
        saveIDwithPinIDobj()
    }

    // console.log(saveIDandPin)
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
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    {/* <div onClick={increaseVh} className='homePageBody'> */}
                    <div className='homePageBody'>
{}                        {saveList}
                        <div>This is BoardPage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    </div>
  )
}

export default BoardPage