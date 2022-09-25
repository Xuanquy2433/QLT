import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

  return (
    <div>
      <ListPillar data={data} />
    </div>
  )
}
