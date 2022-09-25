import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_ADD_PILLAR } from 'utils/const'
import { API_GET_PILLAR } from 'utils/const'
import ListPillar from 'views/pillar/ListPillar'

export default function AdminPillar() {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetchAPI()
  }, [])
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

  return (
    <div>
      <ListPillar data={data} onSubmit={onSubmit} />
    </div>
  )
}
