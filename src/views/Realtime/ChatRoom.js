import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { MenuItem } from '@mui/material';

var stompClient = null;
const ChatRoom = ({ handleClose }) => {
    const [publicChats, setPublicChats] = useState([]);

    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        let Sock = new SockJS('http://localhost:8082/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        // dòng này cho trang admin
        stompClient.subscribe('/notification/public', onMessageReceived);
        //cho trang user
        stompClient.subscribe('/user/15/private', onMessageReceived);
    }

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
    }

    const onError = (err) => {
        console.log(err);
    }

    //message, date,type,status
    return (<>
        {publicChats.map((chat) => (
            <>
                {/* {chat.message} */}
                {/* <div className="message-data">{chat.status}</div> */}
                <MenuItem onClick={handleClose}>
                    <div className='notification' > {chat.message} </div>
                    <div className='notification-time' >{chat.date}</div>
                </MenuItem>
            </>
        ))}
    </>

    )
}


export default ChatRoom