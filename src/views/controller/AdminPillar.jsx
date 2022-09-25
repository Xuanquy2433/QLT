import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_EDIT_PILLAR } from 'utils/const'
import { API_ADD_PILLAR } from 'utils/const'
import { API_DELETE_PILLAR } from 'utils/const'
import { API_GET_PILLAR } from 'utils/const'
import CreatePillar from 'views/pillar/CreatePillar'
import EditPillar from 'views/pillar/EditPillar'
import ListPillar from 'views/pillar/ListPillar'


export default function AdminPillar() {
  const [data, setdata] = useState([])
  const [selected, setSelected] = useState(undefined)


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    fetchAPI()
  }, [])

  const [openEdit, setOpenEdit] = useState(false);

  const fetchAPI = async (e) => {
    const response = await axios.get(API_GET_PILLAR)
    if (response) {
      setdata(response.data)
    }
    console.log("response", response.data);
  }

  const onSubmit = async (data) => {
    if (data.city === '') {
      toast.error("City required field", { autoClose: 1500 });
    }
    else if (data.street === '') {
      toast.error("Street required field", { autoClose: 1500 });
    }
    else {
      try {
        const response = await axios.post(API_ADD_PILLAR, data)
        if (response && response.status === 201) {
          toast.success("Thêm thành công", { autoClose: 1500 });
          setOpenEdit(false);
          fetchAPI();
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

  }

  const onEdit = async (post) => {
    setSelected(post)
    console.log("selected", post);
    setOpenEdit(true)
  }

  const onSubmitEdit = async (data) => {
    try {
      const response = await axios.put(API_EDIT_PILLAR, data)
      if (response && response.status === 201) {
        toast.success("Cập nhập thành công", { autoClose: 1500 });
        fetchAPI();
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
    console.log("id ", id);
    try {
      const response = await axios.delete(API_DELETE_PILLAR + id)
      if (response && response.status === 201) {
        toast.success("Xóa thành công", { autoClose: 1500 });
        fetchAPI();
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
  return (
    <div>
      <CreatePillar onSubmit={onSubmit} open={open} setOpen={setOpen} />
      {selected && <EditPillar item={selected} onSubmitEdit={onSubmitEdit} openEdit={openEdit} setOpenEdit={setOpenEdit} />}
      <ListPillar open={open} setOpen={setOpen} data={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  )
}
