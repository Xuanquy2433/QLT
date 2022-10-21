import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient = null;
const ChatRoom = () => {
    const [publicChats, setPublicChats] = useState([]);
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
    });
    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        setUserData({ ...userData, "connected": true });
        stompClient.subscribe('/notification/public', onMessageReceived);
    }

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
    }

    const onError = (err) => {
        console.log(err);
    }
    return (<>
        {publicChats.map((chat, index) => (
            <div className="message-data">{chat.message}</div>

        ))}
    </>

    )
}

export default ChatRoom