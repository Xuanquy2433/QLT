import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import { MenuItem } from '@mui/material';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import {green} from "@mui/material/colors";
import {API} from "../../utils/const";


var stompClient = null;
const AdminNotification = (params) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        connect();
        getNotification();

    }, []);

    const connect = () => {
        let Sock = new SockJS(API +'/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        stompClient.subscribe('/notification/public', onMessageReceived);
    }


    const getNotification = async (e) => {
        const response = await axios.get(API +'/notification/')
        console.log(response.data)
        if (response.status === 200) {
            params.changeCount(response.data.filter((data)=>data.checked===false).length)
            handleRequest(response.data)
        }
    }
    const handleRequest = (data) =>{
        setData(data)
    }

    const onMessageReceived = (data) => {
        getNotification();
        toast.success(data, { autoClose: 2000 })
    }

    const onError = (err) => {
        console.log(err);
    }

    //message, date,type,status
  ;
    return (<>
        {data.length > 0 ? data.map((data) => (
            <>
                <MenuItem sx={{ borderBottom: '1px solid #ddd'}} >
                    {/* <i className="ni ni check-bold"></i> */}
                    <div  >{data.message}  </div>
                    <div className='notification-time' > <Moment fromNow>{data.date}</Moment></div>
                </MenuItem>
                {/* <div className="message-data">{chat.status}</div> */}
            </>
        )) :
            <MenuItem >
                <div >Hiện không có thông báo ! </div>
                <div className='notification-time' > Bây giờ</div>
            </MenuItem>}
    </>

    )
}


export default AdminNotification