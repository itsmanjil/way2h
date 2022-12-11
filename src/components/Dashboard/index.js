import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import { AxiosInstance } from '../../axios_instance';

const Dashboard = ({ setIsAuthenticated }) => {
  
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(()=>{
    fetch("http://localhost:4000/api/package/packages")
    .then((result)=>{
      result.json().then((resp)=>{
        setEmployees(resp)
      })
    })
  },[])

  const handleEdit = _id => {
    console.log(_id)
    console.log(employees)
    const [employee] = employees.filter(employee => employee._id === _id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = _id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        AxiosInstance.delete(`/delete/${_id}`, {
          // headers: {
          //   Authorization: `bearer ${token}`,
          // },
        })
          .then((res) => {
           
            console.log(res);
          })
          .catch((err) => {
           
          });

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
