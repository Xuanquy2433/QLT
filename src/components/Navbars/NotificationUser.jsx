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
import UserNotificationSize from 'views/Realtime/NotificationUserSize';
import { API_GET_MARK_AS_READ } from 'utils/const';


function Notification() {

    const [countAdmin, setCountAdmin] = React.useState(0);
    const [countUser, setUserCount] = React.useState(0);

    const fetchAPI = async () => {
        const response = await axios.post(API_GET_TEST)
        // const response1 = await axios.post(API_GET_MARK_AS_READ)
        // const response2 = await axios.get(API_GET_SK)
    }

    const markAsRead = async () => {
        const response = await axios.post(API_GET_MARK_AS_READ)
    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        fetchAPI()
        setOpen((prevOpen) => !prevOpen);
        // setOpen(true)
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
        console.log("evt close ");
        markAsRead()
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


            <Stack direction="row" spacing={2}>

                <div className='menu-lv2-noti'>
                    <p
                        style={{ width: '50px' }}
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        {/* <NotificationsNoneIcon /> {countUser}
                        <UserNotification changeUserCount={(data) => setUserCount(data)} /> */}
                        <NotificationsNoneIcon /> {countUser}
                        <UserNotificationSize changeUserCount={(data) => setUserCount(data)} />
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
                                                style={{ width: '300px',position: 'relative' }}
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}>
                                                {/* data from socket */}
                                                <div style={{position: 'absolute'}}>
                                                    <UserNotification changeUserCount={(data) => setUserCount(data)} />
                                                </div>
                                                {/* hard data test */}
                                                {/* <MenuItem onClick={handleClose}>
                                                <div className='notification' >You have <b>4 new themes</b>  </div>
                                                <div className='notification-time' >10 minutes ago</div>
                                            </MenuItem> */}
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