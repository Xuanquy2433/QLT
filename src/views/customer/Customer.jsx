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
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, InputBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
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

    }, {
        name: 'Population',
        code: 'IN',
        population: 12321,
        size: 123,
        density: "density"

    }, {
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

    },
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

    },
    {
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

export default function Customer() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Container fluid style={{ height: "200px" }} className="header bg-gradient-info pb-8 pt-5 pt-md-8 ">
                <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>

                    <div style={{ width: '100%', display: "flex",flexDirection: "row"
                    }}>
                        <Button sx={{padding:"10px", marginRight: '2%', height: '3.2em', width:"20%"}} variant="contained" color="success">
                            Add customer
                        </Button>
                        <Paper sx={{ boxShadow: "none", border: "1px solid #ddd", display: 'flex', padding: '7px 7px 3px 7px', width: '100%', marginBottom: '20px', borderRadius: '7px' }}>
                            <IconButton type="button" sx={{ p: '10px', }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                                placeholder="Search Name Customer"
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
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => (
                                        <TableRow hover role="checkbox">
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell > {item.code} </TableCell>
                                            <TableCell sx={{ textAlign: 'right' }}>  {item.density} </TableCell>
                                            <TableCell sx={{ textAlign: 'right' }}> {item.size}</TableCell>
                                            <TableCell>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}>
                                                            <DeleteIcon></DeleteIcon>
                                                            Delete
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}>
                                                            <EditIcon></EditIcon>
                                                            Update
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[6, 10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </>
    )
}
