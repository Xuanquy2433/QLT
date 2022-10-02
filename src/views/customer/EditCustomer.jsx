import React from 'react'

export default function EditCustomer() {
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
            <TextField onChange={onChangeText} defaultValue={city} name="city" style={{ margin: '5px' }} fullWidth label='City' />
            <TextField onChange={onChangeText} defaultValue={street} name="street" style={{ margin: '5px' }} fullWidth label='Street' />
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
