import { IconButton, InputBase } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom'
import './css.css'
import TableAddress from './TableAddress';
import TableProduct from './TableProduct';

function HomePage() {

    return (
        <div style={{ marginTop: '150px' }} >

            <TableAddress />
            <hr />
            <TableProduct />

        </div>



    )
}

export default HomePage