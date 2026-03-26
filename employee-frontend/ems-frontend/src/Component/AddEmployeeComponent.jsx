import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate ,useParams} from 'react-router-dom';

function AddEmployeeComponent() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    function pageTitle(){
        return id ? <h2>Update Employee</h2> : <h2>Add Employee</h2>
    }

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(console.error)
        }
    },[id])

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        const employee = { firstName, lastName, email };

        if(id){
            updateEmployee(id,employee)
            .then(()=> navigate('/'))
            .catch(console.error);
        } else {
            createEmployee(employee)
            .then(()=> navigate('/'))
            .catch(console.error);
        }
    }

    return (
        <div className="main-wrapper">
    <div className="container">
      <div className="card">

                {pageTitle()}

                <form>
                    
                    <label>First Name :</label>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label>Last Name :</label>
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label>Email :</label>
                    <input
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="button-container">
                        <button onClick={saveOrUpdateEmployee}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}

export default AddEmployeeComponent