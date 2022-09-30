import { Grid, IconButton, InputBase } from '@mui/material';
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
import { Link, NavLink } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './css.css'
import axios from 'axios';
import { API_GET_PILLAR } from 'utils/const';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalDetailProduct from './ModalDetailProduct';
import { API_FIND_BY_PRODUCT_ID } from 'utils/const';

const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'city', label: 'City', minWidth: 100 },
    { id: 'street', label: 'Street', minWidth: 100 },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function TableAddress() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [open, setOpen] = React.useState(false);

    const [dataDetail, setDataDetail] = useState([])
    const handleOpen = async (id) => {
        console.log(id);
        const response = await axios.get(API_FIND_BY_PRODUCT_ID + id)
        if (response) {
            setDataDetail(response.data)
        }
        console.log('data detail ', dataDetail);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([])
    const [dataAll, setDataAll] = useState([])

    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    useEffect(() => {
        getAllAddRess()
    }, [])

    const getAllAddRess = async (e) => {
        const response = await axios.get(API_GET_PILLAR)
        if (response) {
            setData(response.data)
            // setDataAll(response.data[0].product)
        }
    }
    console.log(data);
    // console.log(dataAll);

    return (
        <React.Fragment>

            <div style={{ width: '100%', display: "flex", flexDirection: "row", alignItems: "center", marginBottom: '30px' }}>
                <Paper sx={{ border: "1px solid #ddd", display: 'flex', padding: '7px 7px 3px 7px', width: '100%', borderRadius: '7px' }}>
                    <IconButton type="button" sx={{ p: '5px', }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                        placeholder="Search Name Customer"
                    />
                </Paper>

                <FormControl sx={{ minWidth: 120, backgroundColor: 'white', mb: 1 }} size="small">
                    <InputLabel sx={{ color: 'blue' }} id="demo-select-small">Sắp xếp</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={sort}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Tăng dần</MenuItem>
                        <MenuItem value={20}>Giảm dần</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data && data.map((item, index) => (
                        <Grid item xs={6} key={index} >
                            <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', padding: '10px' }}>
                                <div style={{ width: '46%' }}>
                                    <img style={{ width: '100%', border: '1px solid #ddd' }} src="https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg" alt="" />
                                </div>
                                <div style={{ width: '46%', marginLeft: '4%' }}>
                                    <p>Đường:  {item.street}</p>
                                    <p>Thành Phố: {item.city} </p>
                                    <p>Mô tả: {item.description}</p>

                                    {item.product.length > 0 ? item.product.map((itemDetail, index) => (
                                        <div key={index} style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '5px' }}>
                                            <h2>{itemDetail.name}</h2>
                                        </div>
                                    )) : <div style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '50px', backgroundColor: '#FF4433' }}>
                                        <h2 style={{ color: 'white' }}>Khu vực này đã thuê hết</h2>
                                    </div>}
                                    {/* <div style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '5px' }}>
                                        <h2>product name</h2>
                                    </div>
                                    <div style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '5px' }}>
                                        <h2>product name</h2>
                                    </div> */}
                                </div>
                            </div>

                        </Grid>
                    ))}





                    {/* <Grid item xs={6}>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>ok</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>ok</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>ok</h2>
                    </Grid> */}
                </Grid>
            </Box>

            {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ height: '400px' }}>
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
                            {data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow onClick={() => handleOpen(row.id)} hover role="checkbox" tabIndex={-1} key={index}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} sx={{ cursor: 'pointer' }} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <ModalDetailProduct dataDetail={dataDetail} />
                                </Box>
                            </Modal>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper> */}



        </React.Fragment>
    )
}

export default TableAddress