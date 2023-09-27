import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import {propTypes} from 'prop-types';
function Navbar(props){
  
    const[mode,setmode]=useState('light')

    const toggleMode=(e)=>{
        
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='grey'
      }else{
        setmode('light')
        document.body.style.backgroundColor='white'
      }
    }


    return(
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Suresh</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' >home</Link>
        </li> */}
       <li className='nav-item'>
        <Link className='nav-link' to='/about'>about</Link>
         </li>
         <li className='nav-item'>
        <Link className='nav-link' to="/textform">Textform</Link>
         </li>
         <li className='nav-item'>
        <Link className='nav-link' to="/textform1">Texform1</Link>
         </li>
         <li className='nav-item'>
        <Link className='nav-link' to="/form">Form</Link>
         </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${mode==='light'?'dark':'white'}`}>
  <input className="form-check-input" onClick={toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode==='light'?`Enable dark mode`:`Enable light mode`}</label>
</div>
    </div>
  </div>
</nav>
)
}

//here we are using propTypes to check weather the given value is string or any like object,number
// Navbar.propTypes={
//     title: propTypes.string,
//     about: propTypes.string
// }

//so here we are using defaultProps to give the direct data to the navbar
// Navbar.defaultProps={
//     title: "suresh",
//     about: "aboutSuresh"
// }
export default Navbar;


