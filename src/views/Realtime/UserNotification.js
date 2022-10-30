import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MenuItem } from '@mui/material';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { BorderBottom } from '@mui/icons-material';
import {API} from "../../utils/const";


var stompClient = null;
const UserNotification = (params) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        connect();
        getNotification();

    }, []);

    let decoded;
    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
    }

    console.log('decoede :', Number(decoded.sub.slice(0, 1)));

    const connect = () => {
        let Sock = new SockJS(API+'/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        stompClient.subscribe('/user/' + Number(decoded.sub.slice(0, 1)) + '/private', onMessageReceived);
    }


    const getNotification = async (e) => {
        const response = await axios.get(API+'/notification/?id=' + Number(decoded.sub.slice(0, 1)))
        console.log(response.data)
        if (response.status === 200) {
            setData(response.data)
            params.changeCount(response.data.filter((data)=>data.checked===false).length)
        }
    }


    const onMessageReceived = (data) => {
        getNotification();
        toast.success(data, { autoClose: 2000 })
    }

    const onError = (err) => {
        console.log(err);
    }

    //message, date,type,status
    return (
        <>
            {data.length > 0 ? data.map((data) => (
                <>
                    <MenuItem sx={{borderBottom: '1px solid #ddd'}} >
                        <div  >{data.message}  </div>
                        <div className='notification-time' > <Moment fromNow>{data.date}</Moment></div>
                    </MenuItem>
                    {/* <div className="message-data">{chat.status}</div> */}
                </>
            )) :
                <MenuItem >
                    <div  >Hiện không có thông báo ! </div>
                    <div className='notification-time' >Bây giờ</div>
                </MenuItem>}
        </>
    )
}


export default UserNotification