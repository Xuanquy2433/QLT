import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditPillar({ openEdit, setOpenEdit, item, onSubmitEdit }) {

  // const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [dataAddressEdit, setDataAddressEdit] = useState(item || {
    city: item.city || '',
    street: item.street || '',
    description: item.description || '',
  })

  const { city, street, description } = item

  const onChangeText = (e) => {
    console.log(e.target.value);
    setDataAddressEdit({ ...dataAddressEdit, [e.target.name]: e.target.value })
  }

  const onClickEdit = (e) => {
    onSubmitEdit({ ...item, ...dataAddressEdit, id: item.id })
  }

  console.log(dataAddressEdit);

  return (
    <div>
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
          <h2 style={{ textAlign: 'center' }}>Edit address</h2>
          <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
            <TextField onChange={onChangeText} defaultValue={description} name="description" style={{ margin: '5px' }} fullWidth label='Chú thích' />
            <TextField onChange={onChangeText} defaultValue={street} name="street" style={{ margin: '5px' }} fullWidth label='Đườmg' />
            <TextField onChange={onChangeText} defaultValue={city} name="city" style={{ margin: '5px' }} fullWidth label='Thành phố' />

          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ marginRight: "5px" }} onClick={handleCloseEdit} variant="contained" color="success">
              Close
            </Button>
            <Button onClick={onClickEdit} variant="contained" color="success">
              Submit
            </Button>
          </div>
        </Box>

      </Modal>

    </div>

  )
}
