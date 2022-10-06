import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CreatePillar({ dataa, onSubmit, open, setOpen, dataAddress, dataCategory }) {

    const [data, setData] = useState({
        addressId: 0,
        categoryId: 0,
        description: "",
        status: "AVAILABLE",
        name: "",
        price: 0
    })

    const handleClose = () => setOpen(false);
    const onChangeText = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log("onchange:", e.target.value);
    }

    const onClickAdd = () => {
        onSubmit(data)
    }


    const [valueStateAddress, setValueStateAddress] = useState('');
    const [valueStateCategory, setValueStateCategory] = useState('');


    const [valueStatus, setValueStatus] = useState('')

    const handleChangeAddress = (event) => {
        const value = event.target.value;
        setValueStateAddress(event.target.value);
        setData({ ...data, addressId: (value) });
        console.log("value address", value);
    };

    const handleChangeCategory = (event) => {
        const value = event.target.value;
        setValueStateCategory(event.target.value);
        setData({ ...data, categoryId: (value) });
        console.log("value category", value);
    };

    return (
        <Modal
            open={open}
            onClose={setOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='form-add-product'
                sx={{
                    maxWidth: '40%',
                    margin: '0 auto',
                    marginTop: ' 150px',
                    backgroundColor: 'white',
                    padding: '10px'
                }}
            >
                <h2 style={{ textAlign: 'center' }}>Thêm trụ</h2>
                <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                    {/* <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Mã trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueStatus}
                            label="Mã địa chỉ"
                            onChange={handlChangeStatus}
                        >
                            {statusO.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl> */}
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Địa chỉ</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueStateAddress}
                            label="Mã địa chỉ"
                            onChange={handleChangeAddress}
                        >
                            {dataAddress.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.city} {item.street}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Loại trụ</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueStateCategory}
                            label="Mã địa chỉ"
                            onChange={handleChangeCategory}
                        >
                            {dataCategory.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>


                    <TextField onChange={onChangeText} defaultValue='' name="description" style={{ margin: '5px' }} fullWidth label='Chú thích' />
                    <TextField type="number" onChange={onChangeText} defaultValue='' name="price" style={{ margin: '5px' }} fullWidth label='Giá' />
                    <TextField onChange={onChangeText} defaultValue='' name="name" style={{ margin: '5px' }} fullWidth label='Tên' />

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ marginRight: "5px" }} onClick={handleClose} variant="contained" color="success">
                        Đóng
                    </Button>
                    <Button onClick={onClickAdd} variant="contained" color="success">
                        Thêm
                    </Button>
                </div>

            </Box>

        </Modal>
    )
}
