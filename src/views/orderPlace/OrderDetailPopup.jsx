import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';


const columnsDetail = [
    { id: 'id', label: 'Id', minWidth: 170 },
    {
        id: 'total',
        label: 'Số tháng thuê',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }, {
        id: 'total',
        label: 'Tên trụ',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }, {
        id: 'total',
        label: 'Giá tiền',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }, {
        id: 'total',
        label: 'Mô tả',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }, {
        id: 'total',
        label: 'Địa chỉ',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
];
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function OrderDetailPopup({ dataDetail }) {
    return (
        <React.Fragment>
            <Box sx={style}>
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
                                    {columnsDetail.map((column) => (
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
                                {dataDetail
                                    .map((item, index) => (
                                        <TableRow hover role="checkbox" key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{item.month} tháng</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{item.product.name}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{item.product.price}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{item.product.description}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{item.product.address.fullAddress}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>

        </React.Fragment>
    )
}

export default OrderDetailPopup