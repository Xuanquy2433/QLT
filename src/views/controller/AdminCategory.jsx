import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { API_GET_CATEGORY } from 'utils/const';
import { API_ADD_CATEGORY } from 'utils/const';
import { API_EDIT_CATEGORY } from 'utils/const';
import { API_DELETE_CATEGORY } from 'utils/const';
import { API_UPDATE_ROLE } from 'utils/const';
import { API_GET_USERS } from 'utils/const';
import Category from 'views/category/Category';
import CreateCategory from 'views/category/CreateCategory';
import EditCategory from 'views/category/EditCategory';

export default function AdminCategory() {

    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [selected, setSelected] = useState(undefined)
    const [open, setOpen] = useState(false);

    const [openEdit, setOpenEdit] = React.useState(false)
    const handleCloseEdit = () => setOpenEdit(false)
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
        const response = await axios.get(API_GET_CATEGORY)
        if (response) {
            setData(response.data.content)
            // setTotalPages(response.data.totalElements)
        }
    }
    console.log("data category", data);

    const onEdit = (item) => {
        setSelected(item)
        setOpenEdit(true)
        console.log(item);
    }

    const onSubmitAdd = async (data) => {
        const response = await axios.post(API_ADD_CATEGORY, data)
        if (response && response.status === 201) {
            toast.success("Thêm thành công", { autoClose: "1500" })
            setOpen(false)
            fetchAPI()
        }
    }

    const onSubmitEdit = async (data) => {
        try {
            const response = await axios.put(API_EDIT_CATEGORY, data)
            if (response && response.status === 201) {
                toast.success("Sửa thành công", { autoClose: "1500" })
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
        const response = await axios.delete(API_DELETE_CATEGORY + id)
        if (response && response.status === 201) {
            toast.success("Xoá thành công", { autoClose: "1500" })
            fetchAPI()
        }
    }

    return (
        <div>
            {selected && <EditCategory item={selected} openEdit={openEdit} setOpenEdit={setOpenEdit} onSubmitEdit={onSubmitEdit} />}
            <CreateCategory open={open} setOpen={setOpen} onSubmitAdd={onSubmitAdd} />
            <Category data={data} setOpen={setOpen} onEdit={onEdit} onDelete={onDelete} />
        </div>
    )
}
