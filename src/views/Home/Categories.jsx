import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import { API_GET_ALL_CATEGORY } from 'utils/const';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CategoryIcon from '@mui/icons-material/Category';
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
        <Box sx={{ width: '86%', margin: 'auto', borderRadius: "8px" }}>
            <div>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "8px", color: "#333", fontWeight: "600", }}>
                    <h2 style={{ margin: "8px 0px 0px 10px" }}>Danh mục </h2>
                   
                   
                   
                    <div>
                        {
                            data.map((item, index) => (
                                <NavLink  key={index} to={'/auth/categories/' + item.id} aria-label="main mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <CategoryIcon />
                                                </ListItemIcon>
                                                <ListItemText sx={{ color: "#333" }} primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <Divider />
                                </NavLink>
                            ))
                        }

                        </div>
                </Box>
            </div >
        </Box >
    )
}

export default Categories