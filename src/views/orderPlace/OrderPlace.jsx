import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, InputBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { API_GET_ORDER_ADMIN_USER_CONFIRMED } from 'utils/const';
import { API_CONFIRM_ORDER } from 'utils/const';
import { toast } from 'react-toastify';
import { API_GET_DETAIL_ORDER } from 'utils/const';
import Modal from '@mui/material/Modal';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import OrderDetailPopup from './OrderDetailPopup';

const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    {
        id: 'orderCode',
        label: 'Mã đặt hàng',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'quantity',
        label: 'Số lượng',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'total',
        label: 'Tổng tiền',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Status',
        label: 'Trạng thái',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'action',
        label: '',
        minWidth: 70,
        align: 'right',
    },
];


function OrderPlace() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getOrderUserConfirmed()
    }, [])


    const [data, setData] = useState([])
    const getOrderUserConfirmed = async (e) => {
        const response = await axios.get(API_GET_ORDER_ADMIN_USER_CONFIRMED)
        if (response && response.status === 200) {
            setData(response.data)
        }
    }
 

    //handle
    const handleOpen = () => setOpen(true)
    console.log("data ", data);

    const confirmOrder = async (id) => {
        const response = await axios.put(API_CONFIRM_ORDER + id + '/true')
        if (response.status === 200) {
            toast.success('Thao tác thành công ! ', { autoClose: 2000 })
            getOrderUserConfirmed()
        } else toast.error('Thất bại ! ', { autoClose: 2000 })
    }

    const refuseOrder = async (id) => {
        const response = await axios.put(API_CONFIRM_ORDER + id + '/false')
        if (response.status === 200) {
            toast.success('Thao tác thành công ! ', { autoClose: 2000 })
            getOrderUserConfirmed()
        } else toast.error('Thất bại ! ', { autoClose: 2000 })
    }

    //handle click detail
    const [openDetail, setOpenDetail] = React.useState(false);
    const [dataDetail, setDataDetail] = useState([])
    const handleCloseDetailOrder = () => setOpenDetail(false);

    const handleOpenDetailOrder = async (id) => {
        console.log(id);
        const response = await axios.get(API_GET_DETAIL_ORDER + id)
        if (response.status === 200) {
            setDataDetail(response.data.orderDetail)
        }
        setOpenDetail(true)
    };
    return (
        <>
            <Container fluid style={{ height: "200px" }} className="header bg-gradient-info pb-8 pt-5 pt-md-8 ">
                <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>

                    <div style={{ width: '100%', display: "flex", flexDirection: "row" }}>
                        {/* <Button onClick={handleOpen} sx={{ padding: "10px 5px", marginRight: '2%', height: '3.2em', width: "15%" }} variant="contained" color="success">
                            Thêm Trụ
                        </Button> */}
                        <Paper sx={{ border: "1px solid #ddd", display: 'flex', padding: '7px 7px 3px 7px', width: '100%', marginBottom: '20px', borderRadius: '7px' }}>
                            <IconButton type="button" sx={{ p: '0px', }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                                placeholder="Tìm kiếm mã đơn hàng"
                            />
                        </Paper>
                    </div>

                    {/* <TextField sx={{ mt: "7px", width: "400px" }} id="outlined-basic" label="Search" variant="outlined" /> */}
                    {/* stickyHeader */}
                    <TableContainer sx={{ minHeight: '29em' }}>
                        <Table aria-label="sticky table">
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
                                {data.length > 0 ? data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => (
                                        <TableRow hover sx={{ cursor: 'pointer' }} role="checkbox" key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.orderCode}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.quantity}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.total}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.status}</TableCell>

                                            <TableCell sx={{ textAlign: 'right' }}>
                                                <Button variant="contained" onClick={() => confirmOrder(item.id)} color="success">
                                                    <CheckIcon />
                                                </Button>
                                                <Button sx={{ ml: 2 }} variant="contained" onClick={() => refuseOrder(item.id)} color="error">
                                                    <DoDisturbIcon />
                                                </Button>
                                                <Button sx={{ ml: 2 }} variant="contained" onClick={() => handleOpenDetailOrder(item.id)} color="success">
                                                    ...
                                                </Button>
                                            </TableCell>

                                        </TableRow>
                                    )) :
                                    <TableRow >
                                        <TableCell> <h4 style={{ fontStyle: 'italic', marginTop: '8px' }} > Hiện chưa có ai đặt hàng !</h4></TableCell>
                                    </TableRow>}
                                <OrderDetailPopup dataDetail={dataDetail} openDetail={openDetail} handleCloseDetailOrder={handleCloseDetailOrder} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </>
    )
}

export default OrderPlace