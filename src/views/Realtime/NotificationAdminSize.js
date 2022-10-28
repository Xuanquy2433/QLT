import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import { MenuItem } from '@mui/material';


var stompClient = null;
const AdminNotificationSize = (params) => {
    const [publicChats, setPublicChats] = useState([]);
    const [data, setData] = useState([]);
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
            setCount(response.data.length)
            params.changeCount(response.data.length)
        }
    }


    const onMessageReceived = () => {
        getNotification();

    }

    const onError = (err) => {
        console.log(err);
    }

    //message, date,type,status
    return (<>
        {data.map((data) => (
            <>
                {/* <MenuItem >
                    <div className='notification' >{data.message}  </div>
                    <div className='notification-time' >10 minutes ago</div>
                </MenuItem> */}
                {/* <div className="message-data">{chat.status}</div> */}
            </>
        ))}
    </>

    )
}


export default AdminNotificationSize