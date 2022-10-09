// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import { TextField } from '@mui/material';
// import Moment from 'react-moment';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import './css.css'

// function Activity() {

//     const [value, setValue] = React.useState('1');
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };



//     return (
//         <div className='activity'>
//             <div className='activity-content'>
//                 <div className='activity-title'>
//                     Welcome Admin
//                 </div>
//                 <div className="activity-decription">
//                     This is admin page. You can see the progress you've made with your work and manage your projects or assigned tasks
//                 </div>
//             </div>

//             <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
//                 <TabContext value={value}>
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
//                         <TabList textColor='white' onChange={handleChange} aria-label="lab API tabs example ">
//                             <Tab label="Cofirm recharge Money " value="1" />
//                             <Tab label="Cofirm withdraw Money" value="2" />
//                             <Tab label="Add product" value="3" />
//                         </TabList>
//                     </Box>
//                     <TabPanel value="1">
//                         <TableContainer component={Paper}>
//                             <Table className='activity-table' sx={{ minWidth: 650 }} aria-label="simple table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell style={{ textAlign: "center" }} scope="col">ID</TableCell>
//                                         <TableCell style={{ textAlign: "center" }} scope="col">User ID</TableCell>
//                                         <TableCell style={{ textAlign: "center" }} scope="col">Message</TableCell>
//                                         <TableCell style={{ textAlign: "center" }} scope="col">Money</TableCell>
//                                         <TableCell style={{ textAlign: "center" }} scope="col" >
//                                             Type
//                                         </TableCell>
//                                         <TableCell style={{ textAlign: "center" }} scope="col" >
//                                             Create date
//                                         </TableCell>
//                                     </TableRow>
//                                 </TableHead>

//                             </Table>
//                         </TableContainer>
//                     </TabPanel>
//                     <TabPanel value="2">
//                         <TableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Name Services</TableCell>
//                                         <TableCell align="right">STA PROFIT</TableCell>
//                                         <TableCell align="right">CREATEDDATE</TableCell>
//                                         <TableCell align="right">CLAIM DATE</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     <TableRow>
//                                         <TableCell component="th" scope="row">
//                                         </TableCell>
//                                         <TableCell align="right"></TableCell>
//                                         <TableCell align="right"></TableCell>
//                                         <TableCell align="right"></TableCell>
//                                     </TableRow>
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </TabPanel>
//                     <TabPanel value="3">
//                         <Box className='form-add-product'
//                             sx={{

//                                 maxWidth: '50%',
//                                 margin: '0 auto',
//                                 marginTop: ' 70px',
//                                 backgroundColor: 'white'

//                             }}
//                         >
//                             <TextField name="name" className='form-input-add-product' fullWidth label="Name" id="name" />
//                             <TextField name="percentage" className='form-input-add-product' fullWidth label="Percentage" id="Percentage" />
//                             <div style={{ display: 'flex', justifyContent: ' space-between' }} className="form-flex">
//                                 <TextField name="price" style={{ marginRight: '5px' }} className='form-input-add-product' fullWidth label="Price" id="Price" />
//                                 <TextField name="investMonth" className='form-input-add-product' fullWidth label="InvestMonth" id="InvestMonth" />
//                             </div>

//                             <TextField name="imageURL" className='form-input-add-product' fullWidth label="Image" id="Image" />
//                             <TextField name="description" className='form-input-add-product' fullWidth label="Descriptions" id="Descriptions" />

//                             <div className='form-input-add-product'>
//                                 <FormControl sx={{ width: '100%' }}>
//                                     <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>

//                                 </FormControl>
//                             </div>
//                         </Box>


//                     </TabPanel>
//                 </TabContext>
//             </Box>


//         </div>

//     )
// }

// export default Activity