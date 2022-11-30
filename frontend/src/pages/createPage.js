import React from 'react'
import CreateForm from '../components/createForm/createForm'
import Navbar from '../components/nav/navbar';
import "./createPage.css"
function CreatePage() {
  return (
    <div>
        <Navbar/>
        <div className='createPageContainer'>
          <CreateForm/>
        </div>
    </div>
  )
}

export default CreatePage