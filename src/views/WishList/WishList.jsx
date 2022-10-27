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
import axios from 'axios';
import Moment from 'react-moment';
import { Button, Grid } from '@mui/material';
import './activity.css'

import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { showError } from 'utils/error';
const columns = [
    { id: 'id', label: 'Id đơn hàng', minWidth: 170, align: 'left' },
    {
        id: 'date',
        label: 'Ngày đặt hàng',
        minWidth: 170,
        align: 'center',
    },
    { id: 'code', label: 'Số lượng sản phẩm', minWidth: 100, align: 'center', },
    { id: 'a', label: 'Trạng thái', minWidth: 100, align: 'right', },
    { id: 's', label: 'Hành động', minWidth: 100, align: 'right', },
];
export default function WishList() {
    let decoded;
    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
    }
    return (
        <div>
            <div className='activity'>
                <div className='activity-content'>
                    <div className='activity-title'>
                        Xin chào  {decoded.firstName + " " + decoded.lastName}
                    </div>
                    <div className="activity-decription">
                        Đây là trang hoạt động của bạn. Bạn có thể xem lịch sử đặt hàng và đơn hàng đã đặt của bạn.
                    </div>
                </div>

                <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
                    <TabContext>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
                            <TabList textColor='white' aria-label="lab API tabs example ">
                                <Tab label="Trụ đang thuê" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel >
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 500 }}>
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
                                        {/* <TableBody>
                                        {data.map((item, index) => (
                                            <TableRow key={index} >
                                                <TableCell align="left">{item.id}</TableCell>
                                                <TableCell align="center"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.orderTime}</Moment></TableCell>
                                                <TableCell align="center">{item.totalProduct} sản phẩm</TableCell>
                                                {item.status === 'USER_CONFIRMED' ? <TableCell sx={{ fontWeight: '600', color: 'blue' }} align="right">Chờ</TableCell> : null}
                                                {item.status === 'NEW' ? <TableCell sx={{ fontWeight: '600', color: '#f5c71a' }} align="right">Chờ thanh toán</TableCell> : null}
                                                {item.status === 'DONE' ? <TableCell sx={{ fontWeight: '600', color: 'green' }} align="right">Xong</TableCell> : null}
                                                {item.status === 'CANCELLED' ? <TableCell sx={{ fontWeight: '600', color: 'red' }} align="right">Đã hủy</TableCell> : null}
                                                {item.status === 'PAID' ? <TableCell sx={{ fontWeight: '600', color: 'orange' }} align="right">Đang thuê</TableCell> : null}
                                                <TableCell align="right">
                                                    <NavLink to={'order/' + item.id}>
                                                        <Button variant="contained" color="success">
                                                            Chi tiết
                                                        </Button>
                                                    </NavLink>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody> */}
                                    </Table>
                                </TableContainer>

                            </Paper>
                        </TabPanel>


                    </TabContext>
                </Box>


            </div>
        </div>
    )
}
