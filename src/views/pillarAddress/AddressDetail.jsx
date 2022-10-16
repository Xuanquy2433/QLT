import React, { useEffect, useState } from 'react'
import './css.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { API_GET_PILLAR } from 'utils/const';
import ProductComponent from "./ProductComponent";
import { API_GET_ADDRESS_DETAIL_USER } from 'utils/const';

const columns = [
    {
        id: 'name',
        label: 'Tên trụ',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'category',
        label: 'Loai trụ',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Ngày hết hạn',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];


function AddressDetail() {
    const [dataAddressProduct, setDataAddressProduct] = useState([])
    const [address, setAddress] = useState({})
    const id = useState(window.location.pathname.replace(/\D/g, ""));
    console.log(id[0]);
    useEffect(() => {
        getAddress()
    }, [])

    const getAddress = async (e) => {
        const response = await axios.get(API_GET_ADDRESS_DETAIL_USER + id[0])
        if (response.status === 200) {
            setDataAddressProduct(response.data.product)
            setAddress(response.data.address)
            console.log(response.data);
        }
    }


    return (
        <div className='de'  >
            <div className="address-detail">
                <img src={address.image} alt="" />
                <div>{address.id}</div>
                <div>{address.street}</div>
                <div>{address.city}</div>
                <div>{address.description}</div>
                THông tin address
            </div>
            <Paper sx={{ width: '80%', height: 500, margin: 'auto', overflow: 'hidden', mt: 3, position: 'relative' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
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
                            {dataAddressProduct.length > 0 ?
                                dataAddressProduct.map((item, index) => (
                                    <ProductComponent key={index} product={item}></ProductComponent>
                                )) : <TableCell>Đương này chưa có trụ nào ! </TableCell>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>

    )
}

export default AddressDetail