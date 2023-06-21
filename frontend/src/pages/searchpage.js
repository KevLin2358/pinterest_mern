import React, { useEffect } from 'react';
import Navbar from '../components/nav/navbar';
import { receivePinsFromSearch } from '../actions/search_actions';
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const SearchPage = () => {
    const [msg,setmsg] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
          dispatch(receivePinsFromSearch("asdasd")).then(e => setmsg(e.search.data))
      return () => {
      }
    }, [])
    
    console.log(msg)

    return (
        <React.Fragment>
            <Navbar/>
            <div>
                {/* {msg} */}
            </div>
        </React.Fragment>
    )
}

export default SearchPage