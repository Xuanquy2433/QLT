import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function CreatePillar({data, onSubmit, open, setOpen}) {

    const [dataAddress, setDataAddress] = useState(data || {
        city: '',
        street: '',
    })
    console.log(dataAddress);
    const onChangeText = (event) => {
        setDataAddress({ ...dataAddress, [event.target.name]: event.target.value })
    }

    const onClickAdd = (event) => {
        onSubmit(dataAddress)
        // setOpen(false)
    }


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
                    <h2 style={{ textAlign: 'center' }}>ADD ADDRESS</h2>
                    <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                        <TextField onChange={onChangeText} defaultValue='' name="city" style={{ margin: '5px' }} fullWidth label='City' />
                        <TextField onChange={onChangeText} defaultValue='' name="street" style={{ margin: '5px' }} fullWidth label='Street' />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={onClickAdd} variant="contained" color="success">
                            Submit
                        </Button></div>

                </Box>

            </Modal>
        </div>
    )
}
