import React from 'react'
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
<<<<<<< HEAD:src/views/customer/Customer.jsx
import { Button } from '@mui/material';
=======
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button, IconButton } from '@mui/material';
>>>>>>> 0d6f7b8b47bcd6492879841b0fa2eea32783cc27:src/views/customer/PostCustomer.jsx
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'update',
        label: 'update',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'delete',
        label: 'delete',
        minWidth: 170,
        align: 'right',
    },
];

function createData(name, code, population, size, update) {
    const density = population / size;
    return { name, code, population, size, density, update };
}

const rows = [
    {
        name: 'Population',
        code: 'IN',
        population: 12321,
        size: 123,
        density: "density"

    },
    {
        name: 'Population',
        code: 'IN',
        population: 12321,
        size: 123,
        density: "density"

    },    {
        name: 'Population',
        code: 'IN',
        population: 12321,
        size: 123,
        density: "density"

    },    {
        name: 'Population',
        code: 'IN',
        population: 12321,
        size: 123,
        density: "density"

    },
    // createData('India', 'IN', 1324171354, 3287263, <Button variant="contained">Contained</Button>),
    // createData('China', 'CN', 1403500365, 9596961, <Button variant="contained">Contained</Button>),
    // createData('Italy', 'IT', 60483973, 301340, <Button variant="contained">Contained</Button>),
    // createData('India', 'IN', 1324171354, 3287263, <Button variant="contained">Contained</Button>),
];

export default function PostCustomer() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <div style={{ height: "200px" }} className="header bg-gradient-info pb-8 pt-5 pt-md-8">

                <Paper sx={{ width: '100%', overflow: 'hidden', padding: '15px' }}>
                    <Button sx={{ mt: "7px" }} id="outlined-basic" variant="outlined">Add</Button>

                    <InputBase
                        sx={{ ml: 1, flex: 1,border: '1px solid #ddd',padding: '5px' }}
                        placeholder="Search name"
                        inputProps={{ 'aria-label': 'search name' }}
                    />
                    <IconButton type="button" sx={{ p: '10px'}} >
                        <SearchIcon sx={{borderRadius: '0'}} />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                    <TableContainer >
                        <Table aria-label="sticky table">
                            <TableHead >
                                <TableRow >
                                    {columns.map((column) => (
                                        <TableCell sx={{ color: 'black', fontWeight: '550', fontSize: '17px' }}
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
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
<<<<<<< HEAD:src/views/customer/Customer.jsx
                                    .map((item, index) => (
                                        <TableRow hover role="checkbox">
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell > {item.code} </TableCell>
                                            <TableCell sx={{ textAlign: 'right'}}>  {item.density} </TableCell>
                                            <TableCell  sx={{ textAlign: 'right'}}> {item.size}</TableCell>
                                            <TableCell  sx={{ textAlign: 'right'}}><Button variant="contained">update</Button></TableCell>
                                            <TableCell  sx={{ textAlign: 'right'}}><Button variant="contained">delete</Button></TableCell>
                                        </TableRow>
                                    ))}
=======
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox">
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}

                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
>>>>>>> 0d6f7b8b47bcd6492879841b0fa2eea32783cc27:src/views/customer/PostCustomer.jsx
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </>
    )
}
