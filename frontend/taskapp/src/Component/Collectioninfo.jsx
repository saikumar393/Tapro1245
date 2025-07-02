import React ,{useState,useEffect}from 'react'
import Sidebar from './Sidebar'
import { FaUsersRectangle } from "react-icons/fa6";
import Tableview from './Tableview';



const empdata='http://localhost:3000/api/employee/employees';
 
const Collectioninfo = () => {
 const [newdata,setNewdata]=useState([])

const employeehandler=async()=>{
              const response= await fetch(empdata);
              const newresponse=await response.json();
              setNewdata(newresponse);
}
useEffect(() =>
  {
    employeehandler();
  }
  , []);
 
  return (
    <div className='taskten'>
        <Sidebar/>
        <div className="sectioncollection">
         <div className="tilesection">

             <div className="tile">
              <FaUsersRectangle className='usericon'/>
              {/* <FiAlignJustify className='menuicon'/> */}
              {newdata.length};
             </div>
             
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
         </div>
         <Tableview data={newdata}/>
    </div>
    </div>
  )
}

export default Collectioninfo
