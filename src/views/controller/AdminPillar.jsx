import { Create } from '@mui/icons-material'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_PRODUCT_EDIT } from 'utils/const'
import { API_GET_CATEGORY } from 'utils/const'
import { API_PRODUCT_DELETE } from 'utils/const'
import { API_PRODUCT_ADD } from 'utils/const'
import { API_GET_PILLAR } from 'utils/const'
import { API_GET_PRODUCT } from 'utils/const'
import CreatePillar from 'views/Pillar/CreatePillar'
import EditPillar from 'views/Pillar/EditPillar'
import Pillar from 'views/Pillar/Pillar'

function AdminProduct() {
  const [keyword, setKeyword] = useState('')
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [dataAddress, setDataAddress] = useState([])
  const [dataCategory, setDataCategory] = useState([])
  const [selected, setSelected] = useState(undefined)
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  useEffect(() => {
    getAllProduct()
    getAddress()
    getCategory()
  }, [])

  const getAddress = async (e) => {
    const response = await axios.get(API_GET_PILLAR)
    if (response) {
      setDataAddress(response.data.content)
    }
  }

  const getCategory = async (e) => {
    const response = await axios.get(API_GET_CATEGORY)
    if (response) {
      setDataCategory(response.data.content)
    }
  }

  const handleChangeRowsPerPage = async (event) => {
    const response = await axios.get(API_GET_PRODUCT + 1 + "?quantity=" + event.target.value + "&sort=desc" + "&sortField=id")
    if (response) {
      setData(response.data.content)
      setPage(0);
      // setTotalPages(response.data.totalElements)
      setRowsPerPage(+event.target.value);
    }
  };

  const handleChangePage = async (event, newPage) => {
    const response = await axios.get(API_GET_PRODUCT + (newPage + 1) + "?quantity=" + rowsPerPage + "&sort=desc" + "&sortField=id")
    if (response) {
      setPage(newPage)
      setData(response.data.content)
    }
  }

  const getAllProduct = async (e) => {
    const response = await axios.get(API_GET_PRODUCT + page + "?quantity=" + rowsPerPage + "&sort=desc" + "&sortField=id")
    if (response) {
      setTotalPages(response.data.totalElements)
      setData(response.data.content)
      console.log('data,', response.data.content);
    }
  }

  const onEdit = async (item) => {
    setSelected(item)
    setOpenEdit(true)
    console.log(item);
  }

  const onSubmit = async (data) => {
    console.log("data when add ", data);

    try {
      const formData = new FormData();
      formData.append('multipartFile', data.multipartFile);
      const response = await axios.post(API_PRODUCT_ADD + '?addressId=' + data.addressId + '&categoryId=' + data.categoryId + '&description=' + data.description
        + '&name=' + data.name + '&price=' + data.price, formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      if (response.status === 201) {
        toast.success("them thanh cong", { autoClose: "1500" })
        getAllProduct()
        setOpen(false)
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error && error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else {
        toast.error('Error', {
          autoClose: 2000
        })
      }

    }
  }

  const onSubmitEdit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('multipartFile', data.multipartFile);
      const response = await axios.put(API_PRODUCT_EDIT + "?addressId=" + data.addressId + "&categoryId=" + data.categoryId +
        "&description=" + data.description + "&id=" + data.id + "&name=" + data.name + "&price=" + data.price + "&status=" + data.status,
        formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      if (response.status === 200) {
        toast.success("Sửa thành công", { autoClose: 1500 })
        getAllProduct()
        setOpenEdit(false)
      }

      //catch show error
    } catch (error) {
      console.log(error.response.data)
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error && error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else {
        toast.error('Error', {
          autoClose: 2000
        })
      }
    }
  }

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(API_PRODUCT_DELETE + id)
      if (response.status === 200) {
        toast.success("Xóa thành công", { autoClose: 1500 })
        getAllProduct()
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error) {
        toast.error(`${error.response.data.error}`, {
          autoClose: 2000
        })
      }
      else if (error.response.data.error && error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 2000
        })
      }
      else {
        toast.error('Error', {
          autoClose: 2000
        })
      }
    }
  }

return (
  <div>
    <CreatePillar dataCategory={dataCategory} dataa={data} onSubmit={onSubmit} open={open} setOpen={setOpen} dataAddress={dataAddress} />
    {selected && <EditPillar dataCategory={dataCategory} data={data} item={selected} openEdit={openEdit} setOpenEdit={setOpenEdit} onSubmitEdit={onSubmitEdit} dataAddress={dataAddress} />}
    <Pillar page={page} rowsPerPage={rowsPerPage} onDelete={onDelete} onEdit={onEdit} data={data} setOpen={setOpen}
      handleChangePage={handleChangePage} totalPages={totalPages}
      handleChangeRowsPerPage={handleChangeRowsPerPage} />
  </div>
)
}

export default AdminProduct