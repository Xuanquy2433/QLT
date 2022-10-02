import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_GET_USERS } from 'utils/const';
import ListCustomer from '../customer/ListCustomer';

export default function AdminCustomer() {

  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  useEffect(() => {
    fetchAPI()
  }, [])

  const handleChangePage = async (event, newPage) => {
    const response = await axios.get(API_GET_USERS + (newPage + 1) + "?sort=desc" + "&sortField=email" + "&usersPerPage=" + rowsPerPage)
    if (response) {
      setData(response.data.content)
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = async (event) => {
    const response = await axios.get(API_GET_USERS + 1 + "?sort=desc" + "&sortField=email" + "&usersPerPage=" + event.target.value)
    if (response) {
      setData(response.data.content)
      setPage(0);
      setRowsPerPage(+event.target.value);
    }
  };

  const fetchAPI = async () => {
    const response = await axios.get(API_GET_USERS + page + "?sort=desc" + "&sortField=email" + "&usersPerPage=" + rowsPerPage)
    if (response) {
      setData(response.data.content)
      setTotalPages(response.data.totalElements)
    }
  }
  console.log("data users", data);


  return (
    <div>
      <ListCustomer handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} data={data} page={page} rowsPerPage={rowsPerPage} totalPages={totalPages} />
    </div>
  )
}
