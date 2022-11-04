import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import { API_GET_ALL_CATEGORY } from 'utils/const';

function Categories() {

    const [data, setData] = useState([]);
    const getAllCategories = async (e) => {
        const response = await axios.get(API_GET_ALL_CATEGORY)
        if (response) {
            setData(response.data)
        }
    }
    useEffect(() => {
        getAllCategories()
    }, [])


    return (
        <Box sx={{ width: '86%', margin: 'auto' }}>
            Categories
            {
                data.map((item, index) => (
                    <NavLink style={{ marginRight: '20px' }} key={index} to={'/auth/categories/' + item.id}>
                        {item.name}
                    </NavLink>
                ))
            }
        </Box>
    )
}

export default Categories