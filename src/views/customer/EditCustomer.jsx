import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditCustomer({ setId, setRole, item, openEdit, setOpenEdit, handleCloseEdit, onSubmitEdit }) {
  const roles = [
    {
      value: "ROLE_USER",
      name: "User"
    },
    {
      value: "ROLE_ADMIN",
      name: "Admin"
    }
  ]

  const [valueState, setValueState] = useState('')
  // const [data, setData] = useState(item || {
  //   id: setId,
  //   roleName: setRole
  // })

  const handleChange = (event) => {
    const value = event.target.value
    setValueState(event.target.value)
    setRole(value)
    setId(item.id)
    console.log((item.id));
    console.log(value);
  }

  const onClickEdit = () => {
    onSubmitEdit();
  }
  // console.log(data);
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
            <FormControl fullWidth sx={{ margin: "5px" }}>
              <InputLabel id="demo-simple-select-label">Mã trạng thái</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueState}
                label="Mã địa chỉ"
                onChange={handleChange}
              >
                {roles.map((item, index) => (
                  <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                ))}

              </Select>
            </FormControl>
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
    </div >
  )
}
