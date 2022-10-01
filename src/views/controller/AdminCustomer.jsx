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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    // setPage(0);
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
