import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MenuItem } from '@mui/material';
import Moment from 'react-moment';


var stompClient = null;
const UserNotification = (params) => {
    const [count, setCount] = useState(0);
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
        let Sock = new SockJS('http://localhost:8082/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        stompClient.subscribe('/user/' + Number(decoded.sub.slice(0, 1)) + '/private', onMessageReceived);
    }


    const getNotification = async (e) => {
        const response = await axios.get('http://localhost:8082/notification/?id=' + Number(decoded.sub.slice(0, 1)))
        console.log(response.data)
        if (response.status === 200) {
            setData(response.data)
            setCount(response.data.length)
            params.changeUserCount(response.data.length)
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
                <MenuItem style={{borderBottom: '1px solid #ddd'}} >
                    <div className='notification' >{data.message}  </div>
                    <div className='notification-time' > <Moment fromNow>{data.date}</Moment></div>
                </MenuItem>
            </>
        ))}
    </>

    )
}


export default UserNotification