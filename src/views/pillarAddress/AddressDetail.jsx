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
        id: 'size',
        label: 'Ngày hết hạn',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

function AddressDetail() {
    const [dataAddressProduct, setDataAddressProduct] = useState([])
    const id = useState(window.location.pathname.replace(/\D/g, ""));
    console.log(id[0]);
    useEffect(() => {
        getAddress()
    }, [])

    const getAddress = async (e) => {
        const response = await axios.get(API_GET_ADDRESS_DETAIL_USER + id[0])
        if (response.status === 200) {
            setDataAddressProduct(response.data.product)
            console.log(response.data);
        }
    }


    return (
        <div className='de'  >
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