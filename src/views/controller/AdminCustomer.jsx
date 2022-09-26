import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_GET_USERS } from 'utils/const';
import ListCustomer from '../customer/ListCustomer';

export default function AdminCustomer() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    const response = await axios.get(API_GET_USERS)
    if (response) {
      setData(response.data)
    }

  }
  console.log("data users", data);


  return (
    <div>
      <ListCustomer data={data}/>
    </div>
  )
}
