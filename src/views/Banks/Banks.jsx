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
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
const columns = [
    { id: 'Id', label: 'Id', minWidth: 70, maxWidth: 70 },
    {
        id: 'Name',
        label: 'Tên ngân hàng',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'desc',
        label: 'Mã ngân hàng',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'desc',
        label: 'Số tài khoản',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'desc',
        label: 'Tên chủ tài khoản',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'action',
        label: 'Hành động',
        minWidth: 70,
        maxWidth: 90,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },

];
export default function Banks({ setOpen, data, handleOpenDelete, openDelete, handleCloseDelete, onDelete }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleOpen = () => setOpen(true);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Container fluid style={{ height: "200px" }} className="header bg-gradient-info pb-8 pt-5 pt-md-8 ">
                <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>

                    <div style={{ width: '100%', display: "flex", flexDirection: "row" }}>
                        <Button onClick={handleOpen} sx={{ padding: "10px 5px", marginRight: '2%', height: '3.2em', width: "15%" }} variant="contained" color="success">
                            Thêm tài khoản
                        </Button>
                        <Paper sx={{ boxShadow: "none", border: "1px solid #ddd", display: 'flex', padding: '7px 7px 3px 7px', width: '100%', marginBottom: '20px', borderRadius: '7px' }}>
                            <IconButton type="button" sx={{ p: '0px', }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '90%', fontSize: '1.1em' }}
                                placeholder="Tìm kiếm tên tài khoản ngân hàng"
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
                                            style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => (
                                        <TableRow hover role="checkbox" key={index}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}>  {item.bankName} </TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.bankCode}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.bankAccountNumber}</TableCell>
                                            <TableCell sx={{ textAlign: 'center' }}> {item.bankAccountName}</TableCell>

                                            <TableCell sx={{ textAlign: 'right' }}>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            onClick={handleOpenDelete}
                                                        >
                                                            <DeleteIcon></DeleteIcon>
                                                            Delete

                                                        </DropdownItem>
                                                        <DropdownItem
                                                        >
                                                            <EditIcon></EditIcon>
                                                            Update
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </TableCell>
                                            <Dialog
                                                fullScreen={fullScreen}
                                                open={openDelete}
                                                onClose={handleCloseDelete}
                                                aria-labelledby="responsive-dialog-title"
                                            >
                                                <DialogTitle id="responsive-dialog-title">
                                                    {"Xác nhận xoá ?"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        Do you really want to buy product with  This process cannot be undone.
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button autoFocus onClick={handleCloseDelete}>
                                                        Cancel
                                                    </Button>
                                                    <Button onClick={() => onDelete(item.id)} autoFocus>
                                                        Confirm
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </TableRow>

                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[6, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </div >
    )
}
