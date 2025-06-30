import React from 'react'
import Sidebar from './Sidebar'
import { FaUsersRectangle } from "react-icons/fa6";
import Tableview from './Tableview';

const Collectioninfo = () => {
  return (
    <div className='taskten'>
        <Sidebar/>
        <div className="sectioncollection">
         <div className="tilesection">

             <div className="tile">
              <FaUsersRectangle className='usericon'/>
              {/* <FiAlignJustify className='menuicon'/> */}
             </div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
         </div>
         <Tableview/>
    </div>
    </div>
  )
}

export default Collectioninfo
