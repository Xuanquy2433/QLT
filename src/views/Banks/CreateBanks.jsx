import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function CreateBanks({ open, setOpen, onSubmitAdd }) {
    const [data, setData] = useState({
        bankAccountName: "",
        bankAccountNumber: "",
        bankCode: "",
        bankName: ""
    })

    const onChangeText = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onClickAdd = () => {
        onSubmitAdd(data)
    }

    const handleClose = () => setOpen(false)
    console.log(data);
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
                    <h2 style={{ textAlign: 'center' }}>Thêm danh mục</h2>
                    <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                        <TextField onChange={onChangeText} name="bankAccountName" style={{ margin: '5px' }} fullWidth label='Tên chủ tài khoản' />
                        <TextField onChange={onChangeText} name="bankAccountNumber" style={{ margin: '5px' }} fullWidth label='Số tài khoản' />
                        <TextField onChange={onChangeText} name="bankCode" style={{ margin: '5px' }} fullWidth label='Mã ngân hàng' />
                        <TextField onChange={onChangeText} name="bankName" style={{ margin: '5px' }} fullWidth label='Tên ngân hàng' />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={handleClose} sx={{ marginRight: "5px" }} variant="contained" color="success">
                            Đóng
                        </Button>
                        <Button onClick={onClickAdd} variant="contained" color="success">
                            Thêm
                        </Button>
                    </div>

                </Box>

            </Modal></div>
    )
}
