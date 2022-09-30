import { Create } from '@mui/icons-material'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_PRODUCT_ADD } from 'utils/const'
import { API_GET_PILLAR } from 'utils/const'
import { API_GET_PRODUCT } from 'utils/const'
import CreatePillar from 'views/Pillar/CreatePillar,'
import ListPillar from 'views/Pillar/ListPillar'

function AdminProduct() {
  const [data, setData] = useState([])
  const [dataAddress, setDataAddress] = useState([])

  useEffect(() => {
    getAllProduct()
    getAddress()
  }, [])


  const getAddress = async (e) => {
    const response = await axios.get(API_GET_PILLAR)
    if (response) {
      setDataAddress(response.data.content)
    }
    console.log("data address", response.data.content);
  }

  const [open, setOpen] = useState(false);


  const getAllProduct = async (e) => {
    const response = await axios.get(API_GET_PRODUCT)
    if (response) {
      setData(response.data)
    }
  }
  console.log('data,', data);

  const onSubmit = async (data) => {
    const response = await axios.post(API_PRODUCT_ADD, data)
    if (response.status === 201) {
      toast.success("them thanh cong", { autoClose: "1500" })
      getAllProduct()
      setOpen(false)
    }
  }


  return (
    <div>
      <CreatePillar onSubmit={onSubmit} open={open} setOpen={setOpen} dataAddress={dataAddress} />
      <ListPillar data={data} open={open} setOpen={setOpen} />
    </div>
  )
}

export default AdminProduct