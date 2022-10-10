import { Grid, IconButton, InputBase, styled, Switch } from '@mui/material';
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
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import { API_GET_PILLAR } from 'utils/const';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalDetailProduct from './ModalDetailProduct';
import { API_FIND_BY_PRODUCT_ID } from 'utils/const';
import { API_ADDRESS_FILTER } from 'utils/const';
import { toast } from 'react-toastify';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import CheckIcon from '@mui/icons-material/Check';
import ToggleButtonMui from '@mui/material/ToggleButton';
import './scss.scss'
import AddressDetail from 'views/pillarAddress/AddressDetail';
import { API_GET_ADDRESS } from 'utils/const';
import { API_CLICK_SEARCH_ADDRESS } from 'utils/const';

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

    const [selected, setSelected] = React.useState(false);
    const ToggleButton = styled(ToggleButtonMui)({
        // backgroundColor: "#00BFFF",
        // "&.Mui-selected, &.Mui-selected:hover": {
        //     color: "white",
        //     backgroundColor: '#00BFFF',
        // }
    });

    const handleChangeChecked = (event) => {
        setSelected(event.target.checked);
    };


    // const [checked, setChecked] = React.useState(true);
    // const handleChangeChecked = (event) => {
    //     setChecked(event.target.checked);
    // };

    // show hide popup
    const [open, setOpen] = React.useState(false);
    const [dataDetail, setDataDetail] = useState([])
    const handleOpen = async (id) => {
        console.log(id);
        const response = await axios.get(API_FIND_BY_PRODUCT_ID + id)
        if (response) {
            setDataDetail(response.data)
        }
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    // getFirstPageForHome
    const [data, setData] = useState([])
    const [sort, setSort] = React.useState('asc');
    const [field, setField] = React.useState('street');
    const [keyword, setKeyword] = React.useState('');
    const handleChangeField = (event) => {
        setField(event.target.value);
        onChangeSearchNew()
        // onclickFilter()
    };

    const getAllAddRess = async (e) => {
        const response = await axios.get(API_GET_ADDRESS + '1?dataPerPage=5&sort=asc&sortField=' + field)
        if (response) {
            setData(response.data.contents)
        }
    }


    //new
    const onChangeSearchNew = async (e) => {
        if (selected === false) {
            setSort('desc')
        } else setSort('asc')
        if (field === '') {
            setField('street')
        }
        const response = await axios.get(API_GET_ADDRESS + '1?dataPerPage=5&sort=' + sort + '&sortField=' + field)
        if (response) {
            setData(response.data.contents)
        }
    }

    //click search
    const onclickSearch = async (e) => {
        const response = await axios.get(API_CLICK_SEARCH_ADDRESS + keyword)
        if (response) {
            setData(response.data)
        }
    }


    // ONCHANGE FILTER
    const onclickFilter = async (e) => {

        const response = await axios.get(API_ADDRESS_FILTER + "keyword=" + keyword + '&quantity=1&sort=' + sort + '&sortField=' + field)
        if (response) {
            setData(response.data)
        }
    }
    useEffect(() => {
        getAllAddRess()
    }, [])
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1,mt:10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper sx={{ border: "1px solid #ddd", display: 'flex', height: '45px', width: '100%', borderRadius: '7px' }}>
                            <IconButton type="button" sx={{ p: '5px', }} aria-label="search">
                                <SearchIcon onClick={onclickFilter} />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                                placeholder="Tìm theo từ khóa"
                                onChange={(e) => {
                                    setKeyword(e.target.value)
                                    // onclickFilter()
                                }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <FormControl sx={{ width: '28%', backgroundColor: 'white', height: '45px', borderRadius: '5px' }} size="small">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h3 style={{ color: 'black', width: '46%', marginLeft: '10%', marginTop: '10px', height: '45px', }} id="demo-select-small">Sort  </h3>
                                <ToggleButton
                                    sx={{ height: '73%' }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                        onChangeSearchNew()
                                        // onclickFilter()
                                    }}
                                >
                                    {selected ? <NorthIcon /> : <SouthIcon />}
                                </ToggleButton>
                            </div>
                        </FormControl>
                        <FormControl sx={{ width: '31%', backgroundColor: 'white', height: '45px', ml: 2, borderRadius: '5px' }} size="small">
                            <InputLabel sx={{ color: 'black' }} id="demo-select-small">Tên trường</InputLabel>
                            <Select
                                style={{ height: '45px', }}
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={field}
                                label="Field"
                                onChange={handleChangeField}>
                                <MenuItem value={'street'}>Đường</MenuItem>
                                <MenuItem value={'city'}>Thành phố</MenuItem>
                                <MenuItem value={'description'}>Mô tả</MenuItem>
                            </Select>
                        </FormControl>

                        <Button sx={{ width: '31%', ml: 2, borderRadius: '5px', height: '45px', }} variant="contained" onClick={onclickSearch} color="primary">
                            Tìm kiếm
                        </Button>

                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ width: '100%', mt: 2 }} className='hoverBut' >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data && data.map((item, index) => (
                        <Grid item xs={6} sx={{ mt: 1 }} key={index} >
                            <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', padding: '10px' }}>
                                <p style={{
                                    width: '46%', height: '230px'
                                }}  >
                                    <img style={{ width: '100%', height: '230px', border: '1px solid #ddd' }} src={item.image} alt="" />

                                </p>
                                <div style={{ width: '46%', marginLeft: '4%', color: 'black' }}>
                                    <p>Đường:  {item.street}</p>
                                    <p>Thành Phố: {item.city} </p>
                                    <p>Mô tả: {item.description}</p>
                                    <p>Số lượng trụ:</p>
                                    <p>Khoảng giá:</p>

                                    <button sx={{ mt: 6 }} onClick={() => handleOpen(item.id)} class="offset" >
                                        Xem thêm
                                    </button>
                                    {/* 
                                    {item.product.length > 0 ? item.product.map((itemDetail, index) => (
                                        <div key={index} style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '5px' }}>
                                            <h2>{itemDetail.name}</h2>
                                        </div>
                                    )) : <div style={{ border: '1px solid #ddd', textAlign: 'center', marginTop: '50px', backgroundColor: '#FF4433' }}>
                                        <h2 style={{ color: 'white' }}>Khu vực này đã thuê hết</h2>
                                    </div>} */}
                                </div>
                            </div>
                        </Grid>
                    ))}
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
            <AddressDetail />


        </React.Fragment>
    )
}

export default TableAddress