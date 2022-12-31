import React,{useState} from 'react'
import "./tools.css"
function ResusableSearch({input,setinput}) {
    // const [input,setinput] = useState("")

    // console.log(input)
  return (
    <React.Fragment>
        <input className='searchBarDropdown' placeholder='Search' value={input} onChange={(e) => setinput(e.target.value)}>

        </input>
        
    </React.Fragment>

  )
}

export default ResusableSearch