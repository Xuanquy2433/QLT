import React from 'react'
import Customer from './Customer'

export default function ListCustomer({ data, page, rowsPerPage, totalPages, handleChangePage, handleChangeRowsPerPage }) {
  return (
    <div>
      <Customer data={data} page={page} rowsPerPage={rowsPerPage} totalPages={totalPages} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
    </div>
  )
}
