import React, { Fragment, useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MenuItem } from '@mui/material';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { API, API_GET_CART } from "../../utils/const";
import { NavLink } from 'react-router-dom';


var stompClient = null;
const UserNotification = (params) => {

    const [data, setData] = useState([]);

    let decoded;
    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
    }

    const connect = () => {
        let Sock = new SockJS(API + '/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
        stompClient.debug = () => { };
    }

    const onConnected = () => {
        stompClient.subscribe('/user/' + Number(decoded.sub.slice(0, 1)) + '/private', onMessageReceived);
    }

    const [count, setCount] = useState(0);

    const getCartCount = async () => {
        if (token == null) {
            setCount(JSON.parse(localStorage.getItem("cartTemp")).length);
            console.log('local', count);
        } else {
            const response = await axios.get(API_GET_CART, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (response) {
                setCount(response.data.length);
            }
        }
    };
    const getNotification = async () => {
        const response = await axios.get(API + '/notification/?id=' + Number(decoded.sub.slice(0, 1)))
        if (response.status === 200) {
            handleRequest(response.data)
            params.changeUserCount(response.data.filter((data) => data.checked === false).length)
        }
    }
    const handleRequest = (data) => {
        setData(data)
    }

    const onMessageReceived = (payload) => {
        getNotification()
        console.log(payload)
        if (payload.body === "cart") {
            getCartCount()

        }
    }

    const onError = (err) => {
        console.log(err);
    }


    useEffect(() => {
        connect();
        getNotification();
    }, []);
    //message, date,type,status
    return (
        <div className='scrollbarNoti' id='style-1'>
            {data.length > 0 ? data?.map((data, index) => (
                <Fragment>
                    <NavLink to={'/auth/order/' + data.targetId} >
                        <MenuItem key={index} onClick={params.onClickClose} sx={{ borderBottom: '1px solid #ddd' }}>
                            <li>
                                <div style={{ color: 'black' }} >{data.message}  </div>
                                <div style={{ color: 'rgb(177, 177, 177)' }} className='notification-time' > <Moment fromNow>{data.date}</Moment></div>
                            </li>
                        </MenuItem>
                    </NavLink>
                </Fragment>
            )) :
                <li >
                    <div  >Hiện không có thông báo ! </div>
                    <div className='notification-time' >Bây giờ</div>
                </li>}
        </div>
    )
}


export default UserNotification