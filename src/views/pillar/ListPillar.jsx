import React from 'react'
import Pillar from './Pillar'

export default function ListPillar({ data, onSubmit }) {
  return (
    <div>
      <Pillar data={data} onSubmit={onSubmit} />
    </div>
  )
}
