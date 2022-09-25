import React from 'react'
import Product from './Product'

function ListProduct({data}) {
  return (
    <div>
        <Product data={data}/>
    </div>
  )
}

export default ListProduct