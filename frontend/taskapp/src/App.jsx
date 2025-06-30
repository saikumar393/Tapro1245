import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import Collectioninfo from './Component/Collectioninfo'
import Addemployee from './Component/Addemployee'

const App = () => {
  return (
    <div>
      <Navbar/>
       {/* <Sidebar/>  */}
       <Collectioninfo/> 
      {/* <Addemployee/> */}

    </div>
  )
}

export default App
