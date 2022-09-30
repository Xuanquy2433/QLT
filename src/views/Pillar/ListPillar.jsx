import React from 'react'
import Pillar from './Pillar'

function ListProduct({ data, open, setOpen }) {
  return (
    <div>
      <Pillar data={data} open={open} setOpen={setOpen} />
    </div>
  )
}

export default ListProduct