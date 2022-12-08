import React from "react";
import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";
import Login from "./section-components/login";

import Footer from "./global-components/footer";

const LoginV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Account" subheader="Login" />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginV1;

// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';

// export default function SimpleBackdrop() {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <Button onClick={handleToggle}>Show backdrop</Button>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}
//         onClick={handleClose}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// }
