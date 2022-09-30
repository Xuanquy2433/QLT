import React from 'react'
import Pillar from './Pillar'

function ListProduct({ data, onDelete, open, setOpen, onEdit }) {
  return (
    <div>
      <Pillar onDelete={onDelete} data={data} open={open} setOpen={setOpen} onEdit={onEdit} />
    </div>
  )
}

export default ListProduct