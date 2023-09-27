import React from 'react'
import './Textform.css'
import { useState } from 'react'
// import Navbar from './Navbar';

export default function Textform() {

    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[store,setStore]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user=[firstName, lastName]
        setStore(user)
      
    }
 
    const handleOnChange=(e)=>{
        setFirstName(e.target.value)
    }
    
    const handleOnChange1=(e)=>{
      setLastName(e.target.value)
  }
  return (
    <>
    {/* <Navbar/> */}
    <h1>Hola! {store}</h1>
    <div className='container mb-3 '>
     <form>
     <input className="my-2" type="text" id="fname" value={firstName} onChange={handleOnChange} placeholder='Enter your name' /><br/>
     <input type="text" id="fname" value={lastName} onChange={handleOnChange1} placeholder='Enter your name' />
    <button  type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>Submit</button>
     </form>
    </div>
    </>
  )
}
