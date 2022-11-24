import { CgMenuBoxed } from 'react-icons/cg';
import { Link, useHistory } from "react-router-dom";
import '../Navbars/style.css'
import Badge from '@mui/material/Badge';
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useEffect, useState } from 'react';
import Notification from './NotificationUser';
import { BsSuitHeartFill } from "react-icons/bs";
import axios from "axios";
import { API, API_GET_CART } from "../../utils/const";
import SockJS from "sockjs-client";
import { over } from "stompjs";


let stompClient = null;
const AdminNavbar = () => {

  let decoded;
  const history = useHistory();
  const [number, setNumber] = useState(0);
  let token = localStorage.getItem("token");
  if (token !== null) {
    decoded = jwt_decode(token);
  }
  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("IdOrder")
    localStorage.removeItem("cartADD")
    localStorage.removeItem("cartTemp")
    localStorage.removeItem("countCart")
    localStorage.removeItem("count")
    window.dispatchEvent(new Event("storage"));
    history.push('/auth/homePage')
    toast.success('Đăng xuất thành công !', { autoClose: 1500 })
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


  if (token !== null) {
    decoded = jwt_decode(token);
  }

  const connect = () => {
    let Sock = new SockJS(API + '/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
    stompClient.debug = () => { };
  }

  const onConnected = () => {
    stompClient.subscribe('/user/' + Number(decoded.sub.slice(0, 1)) + '/private', onMessageReceived);
  }

  const [count, setCount] = useState(0);

  const [local, setLocal] = useState(localStorage.getItem("countCart") || 0);

  useEffect(() => {
    const listenStorageChange = () => {
      if (localStorage.getItem("countCart") === null) {
        setLocal(0);
      } else {
        setLocal(localStorage.getItem("countCart"));
      }
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  const getCartCount = async () => {
    if (token == null) {
      setCount(JSON.parse(localStorage.getItem("cartTemp")).length);
      console.log('local', count);
    } else {
      const response = await axios.get(API_GET_CART, {
        headers: {
          'authorization': 'Bearer ' + localStorage.getItem('token'),
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (response) {
        setNumber(response.data.length);
      }
    }
  };

  const onMessageReceived = (payload) => {
    getCartCount()
  }

  const onError = (err) => {
    console.log(err);
  }

  useEffect(() => {
    connect();
    getCartCount()
  }, [count]);

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
              <h1 style={{ color: 'white', margin: "0" }} class="typed-out">
                <img className='logo-home'
                  alt="..."
                  src={require("../../assets/img/brand/1-01-01.png")} />
              </h1>
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



              {
                token && decoded.roles === "[ROLE_ADMIN]"
                  ? ""
                  : <NavItem >
                    <NavLink className="nav-link-icon" to="/auth/cart" tag={Link}>

                      <Badge badgeContent={local} color="secondary"
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}>
                        <i className="ni ni-cart" />
                      </Badge >
                      <span className="nav-link-inner--text">Thanh Toán</span>
                    </NavLink>
                  </NavItem>
              }




              {token && decoded ?
                <NavItem >
                  <NavLink style={{ display: "flex" }} className="nav-link-icon" >
                    <Notification />
                  </NavLink>
                </NavItem> : ''}

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



              {token && decoded ?
                <div className="menu">
                  <ul className="menu-item">
                    <li className="menu-item-title">
                      <NavLink onClick={checkRole} className="menu-hover nav-link-icon">
                        <i style={{ marginRight: "4px" }} className="ni ni-single-02" />
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

                            <NavLink className="nav-link-icon" to="/auth/wishList" tag={Link}>
                              {/* <CgMenuBoxed style={{ fontSize: "18.5px" }} /> */}
                              <BsSuitHeartFill style={styleLab} className="ni ni-BsSuitHeartFill" />
                              <span style={styleFont} className="nav-link-inner--text">Yêu thích</span>
                            </NavLink>

                            <DropdownItem divider />
                          </li>
                          : ''}
                        {token && decoded.roles === '[ROLE_ADMIN]' ?
                          <React.Fragment>
                            <li className="item-menu-level-2">
                              <NavLink className="nav-link-icon" to="/admin/index" tag={Link}
                              >
                                <AdminPanelSettingsIcon sx={styleLab} />
                                <span style={styleFont} className="nav-link-inner--text">Quản trị</span>
                              </NavLink>
                            </li>
                            <DropdownItem divider />
                          </React.Fragment> : ''}
                        <li className="item-menu-level-2">
                          <NavLink className="nav-link-icon" to="/admin/index" tag={Link} onClick={logout}
                          >
                            <LogoutIcon sx={styleLab} />
                            <span style={styleFont} className="nav-link-inner--text">Đăng xuất</span>
                          </NavLink>
                        </li>


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



            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
