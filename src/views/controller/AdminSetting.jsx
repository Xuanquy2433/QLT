import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_SETTING_UPDATE } from 'utils/const'
import { API_SETTING_GET } from 'utils/const'
import { showError } from 'utils/error'
import Setting from 'views/Setting/Setting'

export default function AdminSetting() {
    const [data, setData] = useState([])
    console.log(data);

    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async () => {
        const response = await axios.get(API_SETTING_GET)
        if (response.status === 200) {
            setData(response.data)
        }
    }

    const onUpdate = async (data) => {
        try {
            const response = await axios.post(API_SETTING_UPDATE, data)
            if (response.status === 200) {
                toast.success("Sửa thành công", { autoClose: "1500" })
            }
        } catch (error) {
            showError()
        }
    }
    return (
        <div>
            <Setting data={data} />
        </div>
    )
}
