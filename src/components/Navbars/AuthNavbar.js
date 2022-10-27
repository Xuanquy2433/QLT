import { CgMenuBoxed } from 'react-icons/cg';
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  DropdownItem,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined'; import './style.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';





const AdminNavbar = () => {
  let decoded;
  const history = useHistory();

  let token = localStorage.getItem("token");
  if (token !== null) {
    decoded = jwt_decode(token);
  }
  console.log(decoded);
  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("IdOrder")
    history.push('/auth/homePage')
    toast.success('Logout success')
    // window.location.reload(false)

  }

  const checkRole = () => {
    if (token && decoded.roles === "[ROLE_ADMIN]") {
      history.push('/admin/index')
    }
  }

  const styleLab = {
    marginRight: "7px",
    fontWeight: "400",
    fontSize: "1rem"
  }

  const styleFont = {
    fontSize: "0.9rem",
    fontWeight: "400"
  }


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
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
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            {/* <img
              alt="..."
              src={require("../../assets/img/brand/logoDev.png")}
            /> */}
            {/* <h3 style={{ fontSize: "2.5em", fontWeight: 800, color: 'white' }}>LOGO</h3> */}
            <div class="typed-animation">
              <h1 style={{ color: 'white' }} class="typed-out">LOGO</h1>
            </div>
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/argon-react.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Trang chủ</span>
                </NavLink>
              </NavItem>


              <NavItem >
                <NavLink className="nav-link-icon" to="/auth/cart" tag={Link}>
                  <i className="ni ni-cart" />
                  <span className="nav-link-inner--text">Thanh Toán</span>
                </NavLink>
              </NavItem>



              {token && decoded ? '' :
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/auth/register"
                    tag={Link}
                  >
                    <i className="ni ni-circle-08" />
                    <span className="nav-link-inner--text">Đăng ký</span>
                  </NavLink>
                </NavItem>}

              {/* 
              {token && decoded ? null :
                <NavItem>
                  <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">Đăng nhập</span>
                  </NavLink>
                </NavItem>} */}

              {/* {token && decoded ?
                <NavItem>
                  <NavLink className="nav-link-icon" to="/auth/profile" tag={Link}>
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">Hồ sơ</span>
                  </NavLink>
                </NavItem> : ''} */}



              {/* {decoded && token ? <NavItem ><NavLink
                className="nav-link-icon"
                tag={Link}
              >
                <i className="ni ni-single-02" />
                <span className="nav-link-inner--text">{decoded.firstName + " " + decoded.lastName}</span>
              </NavLink> </NavItem> : ''} */}



              {/* {decoded && token ?
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/admin/index"
                    tag={Link}
                    onClick={logout}
                  >
                    <LogoutIcon />
                    <span className="nav-link-inner--text">Đăng xuất</span>
                  </NavLink>
                </NavItem> : ''
              } */}

              <NavItem className="menu-hover nav-link-icon">
                <NavLink className="nav-link-icon" tag={Link}>
                  {/* <i className="ni ni-notification-70" />

                  <button>
                    <span className="nav-link-inner--text"><ChatRoom />Thông báo </span>
                  </button>
                  <ul className='menu'>
                    <li className='menu-item'>
                      <a href="#" >
                        <div >You have <b>3 new themes</b> trending</div>
                        <div >15 minutes ago</div>
                      </a>
                    </li>
                  </ul> */}
                  <Stack  direction="row" spacing={2}>
                    <div className='menu-lv2'>
                    
                      <Button
                        
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        <NotificationsNoneIcon />
                      </Button>
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
                            {...TransitionProps}
                            
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDown}
                                >
                                  <MenuItem onClick={handleClose}>
                                    <div className='notification' >You have <b>3 new themes</b> trending</div>
                                    <div className='notification-time' >15 minutes ago</div>

                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <div className='notification' >You have <b>4 new themes</b> trending</div>
                                    <div className='notification-time' >10 minutes ago</div>

                                  </MenuItem>
                                

                               
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  </Stack>
                </NavLink>
              </NavItem>
              {token && decoded ?

                <div className="menu">
                  <ul className="menu-item">
                    <li className="menu-item-title">
                      <NavLink onClick={checkRole} className="menu-hover nav-link-icon">
                        <i className="ni ni-single-02" />
                        <span className="nav-link-inner--text">{decoded.firstName + " " + decoded.lastName} <ArrowDropDownIcon /></span>
                      </NavLink>
                      <ul className="menu-level-2">
                        {token && decoded.roles === "[ROLE_USER]" ?
                          <li className="item-menu-level-2">
                            <NavLink className="nav-link-icon" to="/auth/activity" tag={Link}>
                              {/* <CgMenuBoxed style={{ fontSize: "18.5px" }} /> */}
                              <i style={styleLab} className="ni ni-calendar-grid-58" />
                              <span style={styleFont} className="nav-link-inner--text">Hoạt động </span>
                            </NavLink>
                            <DropdownItem divider />
                            <NavLink className="nav-link-icon" to="/auth/profile" tag={Link}>
                              {/* <CgMenuBoxed style={{ fontSize: "18.5px" }} /> */}
                              <i style={styleLab} className="ni ni-single-02" />
                              <span style={styleFont} className="nav-link-inner--text">Hồ sơ</span>
                            </NavLink>
                            <DropdownItem divider />
                          </li>
                          : ''}
                        <li className="item-menu-level-2">
                          <NavLink className="nav-link-icon" to="/admin/index" tag={Link} onClick={logout}
                          >
                            <LogoutIcon sx={styleLab} />
                            <span style={styleFont} className="nav-link-inner--text">Đăng xuất</span>
                          </NavLink>
                        </li>

                        {token && decoded.roles === '[ROLE_ADMIN]' ?
                          <React.Fragment>
                            <DropdownItem divider />
                            <li className="item-menu-level-2">
                              <NavLink className="nav-link-icon" to="/admin/index" tag={Link}
                              >
                                <AdminPanelSettingsIcon sx={styleLab} />
                                <span style={styleFont} className="nav-link-inner--text">Quản trị</span>
                              </NavLink>
                            </li>
                          </React.Fragment> : ''}
                      </ul>

                    </li>
                  </ul>
                </div>
                :
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                      <i className="ni ni-key-25" />
                      <span className="nav-link-inner--text">Đăng nhập</span>
                    </NavLink>
                  </NavItem>


                </React.Fragment>
              }

              {/* <NavItem>
                <div className="menu">
                  <ul className="menu-item">
                    <li className="menu-item-title">
                      <NavLink className="menu-hover nav-link-icon">
                        <i className="ni ni-single-02" />
                        <span className="nav-link-inner--text">{decoded.firstName + " " + decoded.lastName}</span>
                      </NavLink>
                      <ul className="menu-level-2">
                        <li className="item-menu-level-2">
                          <NavLink className="nav-link-icon" to="/auth/profile" tag={Link}>
                            <i className="ni ni-key-25" />
                            <span className="nav-link-inner--text">Hồ sơ</span>
                          </NavLink>
                        </li>
                        <li className="item-menu-level-2">
                          <NavLink className="nav-link-icon" to="/admin/index" tag={Link} onClick={logout}
                          >
                            <ExitToAppIcon />
                            <span className="nav-link-inner--text">Đăng xuất</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </NavItem> */}


            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
