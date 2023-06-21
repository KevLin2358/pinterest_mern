import React, { useEffect,useRef } from 'react';
import Navbar from '../components/nav/navbar';
import { receivePinsFromSearch } from '../actions/search_actions';
import { useState } from 'react';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useDispatch, useSelector} from 'react-redux'
import { fetchSinglePin } from '../actions/pin_actions';

import '../components/dropdownMenu/popup.css'; 
const SearchPage = () => {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const [array,setArray] = useState("")
    const board = useSelector(state => state.board.data)
    const [boardPic,setboardPic] = useState(null)
    const [show,setshow] = useState(false)
    const [title,settitle] = useState("")
    const [image,setImage] = useState(null)
    const [msg,setmsg] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    // const [msg,setmsg] = useState([])

    useEffect(() => {
        const finalsearch = window.location.href.split("#")[0].split("/").pop();
          dispatch(receivePinsFromSearch(finalsearch)).then(e => setArray(e.search.data))
      return () => {
      }
    }, [])

    const showPopup = (title,homepagePinId) => {
        settitle(title)
        console.log(homepagePinId)
        dispatch(fetchSinglePin(homepagePinId)).then(e => setImage(e.pins.data.image))
        setshow(true)

        setTimeout(() => {
        setshow(false)
        }, 2000);

        setTimeout(() => {
            setImage(null)
        }, 2000);
    }

    const searched = window.location.href.split("#")[0].split("/").pop()
    
    useEffect(() => {
        // Simulate loading time or fetch data from a server
        // Once the data is fetched or loading is complete, set isLoading to false
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Delay for 2000 milliseconds (adjust as needed)
      }, []);
      
      if (isLoading) {
        return (
          <React.Fragment>
            <Navbar />
            <div>Loading...</div>
          </React.Fragment>
        );
      }
      
      if (array === "") {
        return (
          <React.Fragment>
            <Navbar />
            <div>There are no results for {searched}</div>
          </React.Fragment>
        );
      }

    const pinList = 
    array.map((pinObj) => {
        return(
            <Pins url={pinObj} key={pinObj._id} board={board} showPopup={showPopup}/>
        )
    } )

    return (
        <React.Fragment>
        <Navbar/>
        <div ref={ref} className='homePageContainer'>
            <div className='homePageBodyFlex'>
                <div className='homePageBody'>
                {pinList}
                    {/* <div>This is homepage</div> */}
                </div>
            </div>
        {show && 
          <div className='popup'>
            {/* <img className='smallimgTest' src={image}/> */}
            {image &&
            <div className='popup-inner'>
                <img className='smallimgTest2' src={image}/>
                <p>This pin is saved to {title}</p> 
            </div>

            }

          </div>
        }
        </div>
        </React.Fragment>
    )
}

export default SearchPage