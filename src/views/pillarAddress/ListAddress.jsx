import React from 'react'
import Address from './Address'

export default function ListPillar({ rowsPerPage, data, onSubmit, onDelete, onEdit, open, setOpen, totalPages, handleChangePage, handleChangeRowsPerPage, page }) {
  return (
    <div>
      <Address data={data} onSubmit={onSubmit} onDelete={onDelete} onEdit={onEdit}
        open={open} setOpen={setOpen} totalPages={totalPages}
        handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage} />
    </div>
  )
}
