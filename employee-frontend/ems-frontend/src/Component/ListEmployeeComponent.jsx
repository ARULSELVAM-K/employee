import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {deleteEmployee, listEmployees} from '../Services/EmployeeService'

function ListEmployeeComponent(){

   const[employees,setEmployees] = useState([])
   const navigator = useNavigate();

   useEffect(()=>{
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(console.error);
   },[])

   function addNewEmployee(){
    navigator('/add-employee')
   }

   function updateEmployee(id){
    navigator(`/update-employee/${id}`)
   }

   function RemoveEmployee(id){
    deleteEmployee(id).then(() => {
        listEmployees().then((response)=>{
            setEmployees(response.data);
        });
    }).catch(console.error);
   }

  return (
    <div className="main-wrapper">
    <div className="container">
        <h1 className="page-title">List Of Employee</h1>

        <div className="header">
            <button className="add-btn" onClick={addNewEmployee}>
                + Add Employee
            </button>
        </div>

        <div className="table-wrapper">
        <table>
            <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
            {
                employees.map(employee=>(
                    <tr key={employee.id} className="table-row">
                       <td>{employee.id}</td>
                       <td>{employee.firstName}</td>
                       <td>{employee.lastName}</td>
                       <td>{employee.email}</td>

                       <td className="btn-group">
                        <button 
                          className="action-btn update-btn"
                          onClick={()=>updateEmployee(employee.id)}
                        >
                          Update
                        </button>

                        <button 
                          className="action-btn delete-btn"
                          onClick={()=>RemoveEmployee(employee.id)}
                        >
                          Delete
                        </button>
                       </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>

    </div>
     </div>
  )
}

export default ListEmployeeComponent