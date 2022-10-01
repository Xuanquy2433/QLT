import React from 'react'
import Pillar from './Pillar'

function ListProduct({ handleChangeRowsPerPage, totalPages, data, onDelete, setOpen, onEdit, page, rowsPerPage, handleChangePage }) {
  return (
    <div>
      <Pillar handleChangeRowsPerPage={handleChangeRowsPerPage} totalPages={totalPages} handleChangePage={handleChangePage} page={page} rowsPerPage={rowsPerPage} onDelete={onDelete} data={data} setOpen={setOpen} onEdit={onEdit} />
    </div>
  )
}

export default ListProduct