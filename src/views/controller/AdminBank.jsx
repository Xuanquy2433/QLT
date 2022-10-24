import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { API_BANK_GET } from 'utils/const'
import { showError } from 'utils/error';
import Banks from 'views/Banks/Banks'
import CreateBanks from 'views/Banks/CreateBanks';
import { API_BANK_ADD, API_BANK_REMOVE } from './../../utils/const';

export default function AdminBank() {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async () => {
        const response = await axios.post(API_BANK_GET)
        if (response.status === 200) {
            setData(response.data)
        }
    }

    const onSubmitAdd = async (data) => {
        try {
            const response = await axios.post(API_BANK_ADD, data)
            if (response.status === 200) {
                setOpen(false)
                toast.success("Thêm thành công", { autoClose: "1500" })
                fetchAPI()
            }
        } catch (error) {
            showError()
        }
    }

    const onSubmitEdit = async () => {
        const response = await axios.post('')
    }

    const onDelete = async (id) => {
        console.log(id);
        const response = await axios.post(API_BANK_REMOVE + id)
        if (response.status === 200) {
            fetchAPI()
            toast.success("Xoá thành công", { autoClose: "1500" })
            setOpenDelete(false)
        }
    }

    return (
        <div>
            <Banks data={data} setOpen={setOpen} onDelete={onDelete}
                handleOpenDelete={handleOpenDelete} openDelete={openDelete} handleCloseDelete={handleCloseDelete} />
            <CreateBanks open={open} setOpen={setOpen} onSubmitAdd={onSubmitAdd} />
        </div>
    )
}
