import React from 'react'
import CreateForm from '../components/createForm/createForm'
import Navbar from '../components/nav/navbar';
import "./createPage.css"
import RealCreateForm from '../components/createForm/realCreateForm';
function CreatePage() {
  return (
    <div>
        <Navbar/>
        <div className='createPageContainer'>
          <RealCreateForm/>
        </div>
    </div>
  )
}

export default CreatePage