import React,{useState} from 'react'

function ResusableSearch() {
    const [input,setinput] = useState("")

    console.log(input)
  return (
    <React.Fragment>
        <input value={input} onChange={(e) => setinput(e.target.value)}>

        </input>
        
    </React.Fragment>

  )
}

export default ResusableSearch