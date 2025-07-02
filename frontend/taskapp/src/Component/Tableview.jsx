import React from 'react'

const Tableview = ({data}) => {
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
           {/* <tbody> */}
            {/* <tr>
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
           </tbody> */}
            <tbody>
          {data && data.length > 0 ? (
            data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>{employee. tasks}</td>
                {/* Add other fields based on your employee object */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No employee data found</td>
            </tr>
          )}
        </tbody>
            </table>      
    </div>
  )
}

export default Tableview

