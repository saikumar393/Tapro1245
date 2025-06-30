import React from 'react'
import { TfiBarChart } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { ImListNumbered } from "react-icons/im";
const Sidebar = () => {
  return (
    <section className="sidebarssection">
        <ul>
            <li>Dashboard
              <RxDashboard className='dashboardicon'/>
            </li>
            <li>Add employee
              <GrUserWorker className='workericon'/>
            </li>
            <li>Add task</li>
            <li>AllEmployee list
              <ImListNumbered className='listicon'/>
            </li>
            <li> Task report
            <TbReportSearch className='Reporticon'/>
            </li>
            <li>Summary/Analytics
                  <TfiBarChart className='Summary'/>
            </li>
        </ul>
    </section>
  )
}

export default Sidebar
