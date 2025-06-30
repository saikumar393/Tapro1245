import React from 'react'

const Tableview = () => {
  return (
    <div className='tablesection ' >
         <table style={{border:'1px solid grey'}} >
            <thead>
              <tr>
                <th>EmployeeName</th>
                <th>Department</th>
                <th>Tasks</th>
                <th>Status</th>
              </tr>
            </thead>
           <tbody>
            <tr>
                <td>Vinay</td>
                <td>CSE</td>
                <td>Project1</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Vinay</td>
                <td>CSE</td>
                <td>Project1</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Vinay</td>
                <td>CSE</td>
                <td>Project1</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Vinay</td>
                <td>CSE</td>
                <td>Project1</td>
                <td>Completed</td>
            </tr>
           </tbody>
            </table>      
    </div>
  )
}

export default Tableview

