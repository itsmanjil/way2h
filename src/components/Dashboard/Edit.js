// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
//   const id = selectedEmployee._id;
//   console.log(id)

//   const [title, setFirstName] = useState(selectedEmployee.title);
//   const [name, setLastName] = useState(selectedEmployee.name);
//   const [query, setEmail] = useState(selectedEmployee.query);
//   const [image, setSalary] = useState(selectedEmployee.image);
//   const API = `http://localhost:4000/api/package/packages/update/${id}`;

//   const handleUpdate = e => {
//     e.preventDefault();

//     if (!title || !name || !query || !image) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const employee = {
//       title,
//       name,
//       query,
//       image,
      
//     };
//     fetch(API,{
//       method: 'PUT',
//       headers:{
//         "Accept": "application/json",
//         "content-type": "application/json"
//       },
//       body:JSON.stringify(employee)
//     })
//     .then((result)=>{
//       console.log("result",result);
//     })

//     // for (let i = 0; i < employees.length; i++) {
//     //   if (employees[i].id === id) {
//     //     employees.splice(i, 1, employee);
//     //     break;
//     //   }
//     // }

//     // localStorage.setItem('employees_data', JSON.stringify(employees));
//     // setEmployees(employees);
//     // setIsEditing(false);

//     Swal.fire({
//       icon: 'success',
//       title: 'Updated!',
//       text: `${employee.title} ${employee.name}'s data has been updated.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleUpdate}>
//         <h1>Edit Employee</h1>
//         <label htmlFor="title">title</label>
//         <input
//           id="title"
//           type="text"
//           name="title"
//           value={title}
//           onChange={e => setFirstName(e.target.value)}
//         />
//         <label htmlFor="name">name</label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={name}
//           onChange={e => setLastName(e.target.value)}
//         />
//         <label htmlFor="query">price</label>
//         <input
//           id="query"
//           type="query"
//           name="query"
//           value={query}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <label htmlFor="image">image</label>
//         <input
//           id="image"
//           type="String"
//           name="image"
//           value={image}
//           onChange={e => setSalary(e.target.value)}
//         />
//         <div style={{ marginTop: '30px' }}>
//           <input type="submit" value="Update" />
//           <input
//             style={{ marginLeft: '12px' }}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsEditing(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Edit;
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate() {
  const classes = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/api/package/packages/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          setFname(result[0].title)
          setLname(result[0].name)
          setUsername(result[0].query)
          // setEmail(result[0].image)
          setAvatar(result[0].image)
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      
      'title': fname,
      'name': lname,
      'query': username,
      'image': email,
      // 'avatar': avatar,
    }
    fetch('http://localhost:4000/api/package/packages/update/'+id, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}