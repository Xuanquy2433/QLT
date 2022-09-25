import React from 'react'
import Pillar from './Pillar'

export default function ListPillar({ data, onSubmit, onDelete, onEdit , open, setOpen}) {
  return (
    <div>
    <Pillar data={data} onSubmit={onSubmit} onDelete={onDelete} onEdit={onEdit}  open={open} setOpen={setOpen}/>
    </div>
  )
}
