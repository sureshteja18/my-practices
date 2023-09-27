import React, { useState } from 'react';
import '../App.css'
// import Navbar from './Navbar';

function Form() {
    const[data,setData]=useState({
        email:"",
        password:""
    })

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (data.password.length<5){
            alert('the password must be more than 5digits')
        }
        console.log(data)
    }

  return (
    <>
    {/* <Navbar/> */}
  <div className='container'>
     <form onSubmit={handleSubmit} >
            <label>E-Mail</label> <br />
            <input type="text" name='email'onChange={changeHandler} placerholder='Enter your Mail-ID'/> <br />
            <label>Passoword</label> <br />
            <input type="password" name='password' onChange={changeHandler} palaceholder='Enter Your Password' /> <br />
            <input type="submit" className='btn btn-primary my-2' value="Submit" />
        </form>
  </div>
  </>
        
  )
}

export default Form;