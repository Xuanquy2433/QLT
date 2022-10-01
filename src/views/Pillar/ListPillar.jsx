import React from 'react'
import Pillar from './Pillar'

function ListProduct({ data, onDelete, open, setOpen, onEdit, page, rowsPerPage, setPage, setRowsPerPage }) {
  return (
    <div>
      <Pillar setPage={setPage} setRowsPerPage={setRowsPerPage} page={page} rowsPerPage={rowsPerPage} onDelete={onDelete} data={data} open={open} setOpen={setOpen} onEdit={onEdit} />
    </div>
  )
}

export default ListProduct