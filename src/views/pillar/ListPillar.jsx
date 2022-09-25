import React from 'react'
import Pillar from './Pillar'

export default function ListPillar({ data, onSubmit, onDelete }) {
  return (
    <div>
      <Pillar data={data} onSubmit={onSubmit} onDelete={onDelete} />
    </div>
  )
}
