// import React, { useEffect , useState} from 'react';

// const Table = ({handleEdit, handleDelete}) => {
//   const [data, setData] = useState([])
//   useEffect(()=>{
//     fetch("http://localhost:4000/api/package/packages")
//     .then((result)=>{
//       result.json().then((resp)=>{
//         setData(resp)
//       })
//     })
//   },[])
   


//   return (
//     <div className="contain-table">
//       <table className="striped-table">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>title</th>
//             <th>place</th>
//             <th>price</th>
//             <th>image</th>
           
//             <th colSpan={2} className="text-center">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((employee, i) => (
//               <tr key={employee._id}>
//                 <td>{employee._id}</td>
//                 <td>{employee.title}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.query}</td>
//                 <td>{employee.image}</td>
              
//                 <td className="text-right">
//                   <button
//                     onClick={() => handleEdit(employee._id)}
//                     className="button muted-button"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="text-left">
//                   <button
//                     onClick={() => handleDelete(employee._id)}
//                     className="button muted-button"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={7}>No Employees</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function UserList() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet()
  }, [])
  
  const UsersGet = () => {
    fetch("http://localhost:4000/api/package/packages")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
          console.log(result)
        }
      )
  }

  const UpdateUser = id => {
    window.location = '/update/'+id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
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
          UsersGet();
        }
      }
    )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="left">First</TableCell>
                <TableCell align="left">Last</TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell align="right">{user._id}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={user.image} />
                    </Box>
                  </TableCell>
                  <TableCell align="left">{user.title}</TableCell>
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.query}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user._id)}>Edit</Button>
                      <Button onClick={() => UserDelete(user._id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}