import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import Collectioninfo from './Component/Collectioninfo'
import Addemployee from './Component/Addemployee'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
       {/* <Sidebar/>  */}
       {/* <Collectioninfo/>  */}
      {/* <Addemployee/> */}
      
     <Routes >
       
    <Route path="/" element={ <Collectioninfo/>  }/>
    <Route path="/addemp" element={<Addemployee/>}/>

     </Routes>
    </div>
  )
}

export default App
