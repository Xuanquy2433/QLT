import React from 'react'
import Address from './Address'

export default function ListPillar({ data, onSubmit, onDelete, onEdit, open, setOpen }) {
  return (
    <div>
      <Address data={data} onSubmit={onSubmit} onDelete={onDelete} onEdit={onEdit} open={open} setOpen={setOpen} />
    </div>
  )
}
