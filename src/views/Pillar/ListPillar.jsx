import React from 'react'
import Pillar from './Pillar'

function ListProduct({ handleChangeRowsPerPage, pagin, data, onDelete, open, setOpen, onEdit, page, rowsPerPage, setPage, setRowsPerPage, handleChangePageUp }) {
  return (
    <div>
      <Pillar handleChangeRowsPerPage={handleChangeRowsPerPage} pagin={pagin} handleChangePageUp={handleChangePageUp} setPage={setPage} setRowsPerPage={setRowsPerPage} page={page} rowsPerPage={rowsPerPage} onDelete={onDelete} data={data} open={open} setOpen={setOpen} onEdit={onEdit} />
    </div>
  )
}

export default ListProduct