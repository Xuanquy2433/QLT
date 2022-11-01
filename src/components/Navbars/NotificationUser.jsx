import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import axios from 'axios';
import { API_GET_TEST } from 'utils/const';
import AdminNotification from 'views/Realtime/AdminNotification';
import UserNotification from 'views/Realtime/UserNotification';
import jwt_decode from "jwt-decode";
import { API_GET_MARK_AS_READ } from 'utils/const';
import UserSize from 'views/Realtime/UserSize';


function Notification() {
    let decoded;

    let token = localStorage.getItem("token");
    if (token !== null) {
        decoded = jwt_decode(token);
    }
    const [countUser, setUserCount] = React.useState(0);


    const markAsRead = async () => {
        console.log('da goi mark as read');
        const response = await axios.post(API_GET_MARK_AS_READ + Number(decoded.sub.slice(0, 1)))
    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        // if (open == false) {
        //     markAsRead()
        //     setUserCount(0)
        // }
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        if (open == true) {
            markAsRead()
            setUserCount(0)
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);


    return (
        <React.Fragment>
            <Stack direction="row" style={{ cursor: 'pointer' }} spacing={2}>
                <div className='menu-lv2-noti'>
                    <p
                        // style={{ width: '50px' }}
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}>
                        <p class="notification">
                            <span> <NotificationsNoneIcon /></span>
                            {countUser !== 0 ? <span class="badge">{countUser}</span> : ''}
                        </p>
                        {/* <UserNotification changeCount={(data) => setUserCount(data)} /> */}
                        <UserSize changeUserCount={(data) => setUserCount(data)}></UserSize>
                    </p>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}>
                                <Paper>
                                    <div className="scrollbar" id="style-1">
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                style={{ width: '300px', position: 'relative' }}
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}>
                                                <UserNotification changeUserCount={(data) => setUserCount(data)} />
                                            </MenuList>
                                        </ClickAwayListener>
                                    </div>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>

        </React.Fragment>
    )
}

export default Notification