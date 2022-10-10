import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jwt_decode from "jwt-decode";
import './css.css'
import axios from 'axios';
import { API_GET_ALL_ORDER } from 'utils/const';
import Moment from 'react-moment';


const columns = [
    { id: 'id', label: 'Id', minWidth: 170, align: 'left' },
    {
        id: 'date',
        label: 'Ngày đặt hàng',
        minWidth: 170,
        align: 'center',
    },
    { id: 'code', label: 'Số lượng sản phẩm', minWidth: 100, align: 'center', },
];
function Activity() {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let decoded;
    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
    }

    // get all orrder
    const [data, setData] = useState([])
    const getALLOrder = async (e) => {
        const response = await axios.get(API_GET_ALL_ORDER, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response) {
            setData(response.data)
        }
    }
    console.log(data);

    useEffect(() => {
        getALLOrder()
    }, [])


    return (
        <div className='activity'>
            <div className='activity-content'>
                <div className='activity-title'>
                    Xin chào  {decoded.firstName + " " + decoded.lastName}
                </div>
                <div className="activity-decription">
                    This is admin page. You can see the progress you've made with your work and manage your projects or assigned tasks
                </div>
            </div>

            <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
                        <TabList textColor='white' onChange={handleChange} aria-label="lab API tabs example ">
                            <Tab label="Đơn hàng đã đặt " value="1" />
                            <Tab label="Lịch sử đặt hàng" value="2" />
                            {/* <Tab label="Add product" value="3" /> */}
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 700 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    sx={{ color: 'black', fontWeight: '600', fontSize: '1em' }}
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((item, index) => (
                                            <TableRow key={index} >
                                                <TableCell align="left">{item.id}</TableCell>
                                                <TableCell align="center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.orderTime}</Moment></TableCell>
                                                <TableCell align="center">{item.totalProduct} sản phẩm</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    </TabPanel>
                    <TabPanel value="2">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name Services</TableCell>
                                        <TableCell align="right">STA PROFIT</TableCell>
                                        <TableCell align="right">CREATEDDATE</TableCell>
                                        <TableCell align="right">CLAIM DATE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    {/* <TabPanel value="3">
                        <Box className='form-add-product'
                            sx={{
                                maxWidth: '50%',
                                margin: '0 auto',
                                marginTop: ' 70px',
                                backgroundColor: 'white'

                            }}
                        >
                            <TextField name="name" className='form-input-add-product' fullWidth label="Name" id="name" />
                            <TextField name="percentage" className='form-input-add-product' fullWidth label="Percentage" id="Percentage" />
                            <div style={{ display: 'flex', justifyContent: ' space-between' }} className="form-flex">
                                <TextField name="price" style={{ marginRight: '5px' }} className='form-input-add-product' fullWidth label="Price" id="Price" />
                                <TextField name="investMonth" className='form-input-add-product' fullWidth label="InvestMonth" id="InvestMonth" />
                            </div>

                            <TextField name="imageURL" className='form-input-add-product' fullWidth label="Image" id="Image" />
                            <TextField name="description" className='form-input-add-product' fullWidth label="Descriptions" id="Descriptions" />

                            <div className='form-input-add-product'>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>

                                </FormControl>
                            </div>
                        </Box>


                    </TabPanel> */}
                </TabContext>
            </Box>


        </div>

    )
}

export default Activity