import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient = null;
const ChatRoom = () => {
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
                <div className="message-data">{chat.message}</div>
                <div className="message-data">{chat.status}</div></>
        ))}
    </>

    )
}


export default ChatRoom