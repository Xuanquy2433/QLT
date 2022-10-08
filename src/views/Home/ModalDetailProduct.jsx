import { IconButton, InputBase } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink, useHistory } from 'react-router-dom'
import './css.css'
import axios from 'axios';
import { API_GET_PILLAR } from 'utils/const';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import { API_ADD_CART } from 'utils/const';

const columns = [
    { id: 'image', label: 'Hình ảnh', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    {
        id: 'price',
        label: 'Price',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'button',
        label: 'Hành động',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];
function ModalDetailProduct({ dataDetail }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //handle
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     getAllAddRess()
    // }, [])

    // const getAllAddRess = async (e) => {
    //     const response = await axios.get(API_GET_PILLAR)
    //     if (response) {
    //         setData(response.data)
    //     }
    // }

    const history = useHistory()

    let token = localStorage.getItem('token')

    const order = async (id) => {
        console.log("idddddddddddd ", id);
        try {
            if (token) {
                const response = await axios.post(API_ADD_CART, {
                    month: 1,
                    productId: id
                }, {
                    headers: {
                        'authorization': 'Bearer ' + localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                if (response && response.status === 201) {
                    toast.success('Thêm vào giỏ hàng thành công', {
                        autoClose: 3000
                    })
                    history.push('/auth/cart')
                };
            } else {
                toast.success('Please login', {
                    autoClose: 3000
                })
                history.push('/auth/login')
            }


        } catch (error) {
            console.log(error.response.data)
            if (error.response.data.message) {
                toast.error(`${error.response.data.message}`, {
                    autoClose: 2000
                })
            }
            else if (error.response.data.error) {
                toast.error(`${error.response.data.error}`, {
                    autoClose: 2000
                })
            }
            else if (error.response.data.error && error.response.data.message) {
                toast.error(`${error.response.data.message}`, {
                    autoClose: 2000
                })
            }
            else {
                toast.error('Error', {
                    autoClose: 2000
                })
            }
        }
    }

    return (
        <React.Fragment>
            <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
                <div style={{ width: '100%', display: "flex", flexDirection: "row" }}>
                    <Paper sx={{ border: "1px solid #ddd", display: 'flex', padding: '7px 7px 3px 7px', width: '100%', marginBottom: '20px', borderRadius: '7px' }}>
                        <IconButton type="button" sx={{ p: '0px', }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                            placeholder="Search here"
                        />
                    </Paper>
                </div>
                <TableContainer sx={{ height: '350px' }}>
                    <Table aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{ color: 'black', fontWeight: '600', fontSize: '1em' }}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataDetail.length > 0 ?
                                // dataDetail.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                dataDetail.map((item, index) => (
                                    <TableRow hover role="checkbox" key={index}>
                                        <TableCell>
                                            <img style={{ width: '50px', height: '50px' }} src={item.photosImagePath} alt="" />
                                        </TableCell>
                                        <TableCell > {item.name} </TableCell>
                                        <TableCell style={{ textAlign: 'right' }}> {item.price} </TableCell>
                                        <TableCell style={{ textAlign: 'right' }} > {item.description} </TableCell>
                                        <TableCell style={{ textAlign: 'right' }}> <Button onClick={(e) => order(item.id)} variant="contained" color="success">
                                            Add cart
                                        </Button> </TableCell>
                                    </TableRow>
                                )) : <h5 style={{ fontStyle: 'italic', marginTop: '8px', width: '180px' }} > Đường này chưa có trụ nào !</h5>}
                            {/* <h5 style={{fontStyle: 'italic',marginTop: '8px',width: '180px'}} > Đường này chưa có trụ nào !</h5> */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[6, 10, 25, 100]}
                    component="div"
                    count={dataDetail.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </Paper>
        </React.Fragment>
    )
}

export default ModalDetailProduct