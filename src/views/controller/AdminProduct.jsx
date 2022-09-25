import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_GET_PRODUCT } from 'utils/const'
import ListProduct from 'views/Product/ListProduct'

function AdminProduct() {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllProduct()
  }, [])
  const getAllProduct = async (e) => {
    const response = await axios.post(API_GET_PRODUCT)
    if (response) {
      setData(response.data)
    }
  }
  console.log('data,', data);
  return (
    <div>
      <ListProduct data={data}></ListProduct>
    </div>
  )
}

export default AdminProduct