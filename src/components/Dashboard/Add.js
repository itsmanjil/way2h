// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const Add = ({setIsAdding}) => {
//   const [title, setFirstName] = useState('');
//   const [name, setLastName] = useState('');
//   const [query, setEmail] = useState('');
//   const [image, setSalary] = useState('');
//   // const [date, setDate] = useState('');

//   const handleAdd = e => {
//     e.preventDefault();

//     if (!title || !name || !query || !image ) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const newEmployee = {
//       title,
//       name,
//       query,
//       image
//     };

//     fetch("http://localhost:4000/api/package/item/item_details",{
//       method: 'POST',
//       headers:{
//         "Accept": "application/json",
//         "content-type": "application/json"
//       },
//       body:JSON.stringify(newEmployee)
//     })
//     .then((result)=>{
//       console.log("result",result);
//     })

    

//     Swal.fire({
//       icon: 'success',
//       title: 'Added!',
//       text: `${title} ${title}'s data has been Added.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleAdd}>
//         <h1>Add Travel Package </h1>
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
//           type="number"
//           name="image"
//           value={image}
//           onChange={e => setSalary(e.target.value)}
//         />
//         {/* <label htmlFor="date">Date</label>
//         <input
//           id="date"
//           type="date"
//           name="date"
//           value={date}
//           onChange={e => setDate(e.target.value)}
//         /> */}
//         <div style={{ marginTop: '30px' }}>
//           <input type="submit" value="Add" />
//           <input
//             style={{ marginLeft: '12px' }}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsAdding(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Add;

import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

export default function UserCreate() {
  const classes = useStyles();
 


  
  const handleSubmit = event => {
    event.preventDefault();
    // var data = {
    //   'title': fname,
    //   'name': lname,
    //   'query': username,
      
    // }
    const formData = new FormData();
    formData.append("title", fname);
    formData.append("name", lname);
    formData.append("query", username);
    formData.append("image", avatar)

    fetch('http://localhost:4000/api/package/create', {
      method: 'POST',
      headers: {
        // Accept: l'appication/form-data',
        'Content-Type': 'multipart/form-data; boundary=------some-random-characters',
        // 'Accept': 'application/json'
       
      },
      body: JSON.stringify(formData),
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
  const [avatar, setimage] = useState('');

//   const handlePhoto = async e =>{
//     let value = e.target.files[0] 
//     setimage(value)
// } 
    const handleChange = e => {
      //let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
      setimage(e.target.files[0]);
      
  }
  

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
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid> */}

<input type="file" name="image" onChange={(e) => setimage(e.target.value)}
/>
{/* <input type="file" id="photo" accept=".png, .jpg, .jpeg"  onChange={handlePhoto} /> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}