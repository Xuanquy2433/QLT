import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import { MenuItem } from '@mui/material';
import Moment from 'react-moment';
import { toast } from 'react-toastify';


var stompClient = null;
const AdminNotification = (params) => {
    const [publicChats, setPublicChats] = useState([]);
    const [data, setData] = useState([]);
    const [countNew, setCountNew] = useState(0);

    const [count, setCount] = useState(0);
    useEffect(() => {
        connect();
        getNotification();

    }, []);

    const connect = () => {
        let Sock = new SockJS('http://localhost:8082/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        stompClient.subscribe('/notification/public', onMessageReceived);
    }


    const getNotification = async (e) => {
        const response = await axios.get('http://localhost:8082/notification/')
        console.log(response.data)
        if (response.status === 200) {
            setData(response.data)
            response.data.map((item, index) => {
                if (item.checked == false) {
                    setCountNew(countNew + 1)
                }
            })
            params.changeCount(countNew)
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
    return (<>
        {data.length > 0 ? data.map((data) => (
            <>
                <MenuItem sx={{ borderBottom: '1px solid #ddd' }} >
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