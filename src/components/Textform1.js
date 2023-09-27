import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
  const [text,setText] = useState('')

  const handleUpClick =()=>{
       let newText=text.toUpperCase()
       setText(newText)
  }

  const handleLowClick =()=>{
  let newText1= text.toLowerCase()
  setText(newText1)
  }

  const handleDelete=()=>{
    setText("")
  }

  const handleOnChange =(e)=>{
    setText(e.target.value)
  }

  const countWords =(text)=>{
    let arr=text.split(' ');
    let newArr=arr.filter((word)=>{
          return word !== arr;
    })
    return newArr.length
  }
  return (
    <>
    <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>ButtonToUp</button>
    <button className="btn btn-primary my-3 " onClick={handleLowClick}>ButtonToLow</button>
    <button className="btn btn-primary mx-3" onClick={handleDelete}>Delete text</button>
  </div>
  <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
    <h2 className='text'>Word and letter counter</h2>
    <p className="fs-5 text">{countWords(text)} words and {text.length} letters</p>
    
  </div>
  </>
  )
}














// import React from 'react'
// import { useState } from 'react'
// // import Navbar from './Navbar';

// export default function Textform1() {


//     const[userName,setUserName]=useState({
//         fName:'',
//         lName:''

//     });
//     const[store,setStore]=useState()

    
 
//     const handleOnChange=(e)=>{
//         const{name,value}=e.target;
//         setUserName({
//             ...userName,
//             [name]: value
//         })    
//     }
   
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         setStore(`${userName.fName} ${userName.lName}`)

      
//     }
    

//   return (
//     <>
//     <Navbar/>
//     <h1>Hello {store}</h1>
//     <div className='container mb-3 '>
//      <form>
//      <input className="my-2" type="text" id="fname" name='fName' value={userName.fName} required onChange={handleOnChange}  placeholder='Enter your name' /><br/>
//      <input type="text" id="fname" name='lName' value={userName.lName} required onChange={handleOnChange} placeholder='Enter your name'/>
//     <button  type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>Submit</button>
//      </form>
//     </div>
//     </>
//   )
// }