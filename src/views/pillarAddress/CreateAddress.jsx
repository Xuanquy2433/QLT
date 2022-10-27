import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';

export default function CreatePillar({ data, onSubmit, open, setOpen }) {

    const [dataAddress, setDataAddress] = useState({
        city: '',
        street: '',
        description: '',
        multipartFile: ''
    })
    const [selectedImage, setSelectedImage] = useState(null);

    const onChangeText = (event) => {
        setDataAddress({ ...dataAddress, [event.target.name]: event.target.value })
    }

    const onChangeImage = (event) => {
        const value = event.target.files[0]
        setSelectedImage(event.target.files[0])
        setDataAddress({ ...dataAddress, multipartFile: event.target.files[0] })
    }

    const onClickAdd = (event) => {
        onSubmit(dataAddress)
        setOpen(false)
    }

    const handleClose = () => setOpen(false);

    console.log(dataAddress);
    return (
        <div>
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
                    <h2 style={{ textAlign: 'center' }}>Thêm địa chỉ</h2>

                    <div>
                        {selectedImage && (
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img alt="not fount" width={"130px"} src={URL.createObjectURL(selectedImage)} />
                                {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
                            </div>
                        )}

                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", margin: "10px" }} className="form-flex">
                        <TextField onChange={onChangeImage} style={{ margin: '5px -5px 5px 5px' }} name="multipartFile" type="file" multiple accept="image/*" />
                        <TextField onChange={onChangeText} defaultValue='' name="city" style={{ margin: '5px' }} fullWidth label='Thành phố' />
                        <TextField onChange={onChangeText} defaultValue='' name="street" style={{ margin: '5px' }} fullWidth label='Đường' />
                        <TextField onChange={onChangeText} defaultValue='' name="description" style={{ margin: '5px' }} fullWidth label='Chú thích' />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ marginRight: "5px" }} onClick={handleClose} variant="contained" color="success">
                            Close
                        </Button>
                        <Button onClick={onClickAdd} variant="contained" color="success">
                            Submit
                        </Button>
                    </div>

                </Box>

            </Modal>
        </div>
    )
}
