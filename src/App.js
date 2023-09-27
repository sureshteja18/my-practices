import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Textform1 from './components/Textform1'
import Form from './components/Form';
import About from './components/About';
// import { useState } from 'react';
import { BrowserRouter,Routes,Route,Outlet} from 'react-router-dom';


function App() {
 
  const AppLayout=()=>[
    <>
      <Navbar/>
      <Outlet/>
      </>
  
  ]

  return (

    <div className="App">
      
      <BrowserRouter>
       <Routes>
        <Route  path='/' element={<AppLayout/>}>
        <Route path='/about' element={<About/>} />
        <Route path='/textform' element={<Textform/>} />
        <Route path='/textform1' element={<Textform1/>} />
        <Route path='/form' element={<Form/>} />
        </Route>
       </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
