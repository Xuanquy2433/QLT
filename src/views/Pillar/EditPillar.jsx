import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditPillar({ item, data, dataAddress, openEdit, setOpenEdit, onSubmitEdit, dataCategory }) {

    const { addressId, description, status, name, price, multipartFile, image } = item
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setDataEdit({
            addressId: item.address.id || 0,
            categoryId: item.category.id || 0,
            description: item.description || "",
            status: item.status || "",
            name: item.name || "",
            price: item.price || 0,
            multipartFile: item.image || ''
        })
    }, [item])

    const [dataEdit, setDataEdit] = useState({
        addressId: item.address.id || 0,
        categoryId: item.category.id || 0,
        description: item.description || "",
        status: item.status || "",
        name: item.name || "",
        price: item.price || 0,
        multipartFile: item.image || ''
    })

    console.log(dataEdit)

    const statusO = [
        {
            value: "HIRING",
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

    const onChangeImage = (event) => {
        const value = event.target.files[0]
        console.log(value);
        setSelectedImage(event.target.files[0])
        setDataEdit({ ...dataEdit, multipartFile: (value) })
    }

    const onClickEdit = (e) => {
        console.log(e);
        onSubmitEdit({ ...item, ...dataEdit, id: item.id })
    }

    const [valueStateAddress, setValueStateAddress] = useState();
    const [valueStateCategory, setValueStateCategory] = useState();

    const [valueStatus, setValueStatus] = useState('')

    const handleChangeAddress = (event) => {
        const value = event.target.value;
        setValueStateAddress(event.target.value);
        setDataEdit({ ...dataEdit, addressId: (value) });
        console.log("value address", value);
    };

    const handleChangeCategory = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setValueStateCategory(event.target.value);
        setDataEdit({ ...dataEdit, categoryId: value });
        console.log("value category", value);
    };

    const handlChangeStatus = (e) => {
        const valueSta = e.target.value
        setValueStatus(e.target.value);
        setDataEdit({ ...dataEdit, status: (valueSta) });
        console.log("value status", valueSta);
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <Modal
            open={openEdit}
            onClose={setOpenEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='form-add-product'
                sx={{
                    width: '40%',
                    position: 'relative',
                    transform: "translate(-50%, -50%)",
                    backgroundColor: 'white',
                    padding: '10px',
                    top: "50%",
                    left: "50%"
                }}
            >
                <h2 style={{ textAlign: 'center' }}>Sửa thông tin trụ</h2>
                {/* <div>
                    {selectedImage && (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img alt="not fount" width={"130px"} src={URL.createObjectURL(selectedImage)} />
                        </div>
                    )}
                </div> */}
                <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Mã trạng thái</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dataEdit.status}
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
                            value={dataEdit.addressId}
                            defaultValue={addressId}
                            label="Mã địa chỉ"
                            onChange={handleChangeAddress}
                            MenuProps={MenuProps}
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
                            value={dataEdit.categoryId}
                            label="Mã địa chỉ"
                            MenuProps={MenuProps}
                            onChange={handleChangeCategory}
                        >
                            {dataCategory.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <TextField defaultValue={description} onChange={onChangeText} name="description" style={{ margin: '5px' }} fullWidth label='Chú thích' />
                    <TextField defaultValue={price} type="number" onChange={onChangeText} name="price" style={{ margin: '5px' }} fullWidth label='Giá' />
                    <TextField defaultValue={name} onChange={onChangeText} name="name" style={{ margin: '5px' }} fullWidth label='Tên' />


                    <img style={{ width: "20px" }} src={dataEdit.multipartFile} alt="" />

                    <TextField defaultValue={multipartFile} onChange={onChangeImage} style={{ margin: '5px -5px 5px 5px' }} name="multipartFile" type="file" multiple accept="image*/*" />
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
