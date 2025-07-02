import React from 'react'
  import { FiAlignJustify } from "react-icons/fi";
  import { FaHome } from "react-icons/fa";
  import { FcAbout } from "react-icons/fc";
  import { BsListTask } from "react-icons/bs";
  import { GrDocumentPerformance } from "react-icons/gr";
  import { MdTitle } from "react-icons/md";
  import { Link } from 'react-router-dom';
const Navbar = () => {
  return (

    <section className="navsection">
        <div className='title'>
             <MdTitle className='titleicon'/>
             <h1>
              Title
            </h1></div>
        <div className='menu'> 
            
        <ul>
            <Link to="/">
            <li>Home
              <FaHome className='Homeicon  iconstyle'/>
            </li>
            </Link>
            <Link to='/addemp'>
            <li>Employees
                <FcAbout className='Abouticon  iconstyle'/>
            </li>
            </Link>
            <li>Task
              <BsListTask className='Taskicon  iconstyle'/>
            </li>
            <li>Performance
              <GrDocumentPerformance className='Performanceicon  iconstyle'/>
            </li>
            </ul></div>
        <div className='user'>
            <h3>
                Login/Signup
            </h3>
          <FiAlignJustify className='navicon'/>
        </div>
    </section>
      
    
  )
}

export default Navbar;
