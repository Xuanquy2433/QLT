import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditPillar({ item, dataAddress, openEdit, setOpenEdit, onSubmitEdit }) {

    const { addressId, description, status, name, price } = item

    const [dataEdit, setDataEdit] = useState(item || {
        addressId: item.addressId || 0,
        description: item.description || "",
        status: item.status || "",
        name: item.name || "",
        price: item.price || 0
    })

    const statusO = [
        {
            value: "ENABLED",
            name: "Đã cho thuê"
        },
        {
            value: "AVAILABLE",
            name: "Có sẵn"
        },
        {
            value: "DISABLED",
            name: "Dừng hoạt động"
        },
    ]


    const handleClose = () => setOpenEdit(false);

    const onChangeText = (e) => {
        setDataEdit({ ...dataEdit, [e.target.name]: e.target.value })
        console.log("onchange:", e.target.value);
    }

    const onClickEdit = (e) => {
        console.log(e);
        onSubmitEdit({ ...item, ...dataEdit, id: item.id })
    }

    const [valueState, setValueState] = useState('');
    const [valueStatus, setValueStatus] = useState('')

    const handleChange = (event) => {
        const value = event.target.value;
        setValueState(event.target.value);
        setDataEdit({ ...dataEdit, addressId: (value) });
        console.log("value address", value);
    };

    const handlChangeStatus = (e) => {
        const valueSta = e.target.value
        setValueStatus(e.target.value);
        setDataEdit({ ...dataEdit, status: (valueSta) });
        console.log("value status", valueSta);
    }
    console.log(dataEdit);
    return (
        <Modal
            open={openEdit}
            onClose={setOpenEdit}
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
                <h2 style={{ textAlign: 'center' }}>Sửa thông tin trụ</h2>
                <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Mã trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueStatus}
                            defaultValue={status}
                            label="Mã địa chỉ"
                            onChange={handlChangeStatus}
                        >
                            {statusO.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Mã địa chỉ</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueState}
                            defaultValue={addressId}
                            label="Mã địa chỉ"
                            onChange={handleChange}
                        >
                            {dataAddress.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.id}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>


                    <TextField defaultValue={description} onChange={onChangeText} name="description" style={{ margin: '5px' }} fullWidth label='Chú thích' />
                    <TextField defaultValue={price} type="number" onChange={onChangeText} name="price" style={{ margin: '5px' }} fullWidth label='Giá' />
                    <TextField defaultValue={name} onChange={onChangeText} name="name" style={{ margin: '5px' }} fullWidth label='Tên' />

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ marginRight: "5px" }} onClick={handleClose} variant="contained" color="success">
                        Đóng
                    </Button>
                    <Button onClick={onClickEdit} variant="contained" color="success">
                        Sửa
                    </Button>
                </div>

            </Box>

        </Modal>
    )
}
