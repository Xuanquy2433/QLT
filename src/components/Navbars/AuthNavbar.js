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
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined'; import './style.css'

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
             
                <NavItem>
                  <NavLink className="nav-link-icon" to="/auth/cart" tag={Link}>
                    <i className="ni ni-cart" />
                    <span className="nav-link-inner--text">Giỏ hàng</span>
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

              {token && decoded ?

                <div className="menu">
                  <ul className="menu-item">
                    <li className="menu-item-title">
                      <NavLink onClick={checkRole} className="menu-hover nav-link-icon">
                        <i className="ni ni-single-02" />
                        <span className="nav-link-inner--text">{decoded.firstName + " " + decoded.lastName}</span>
                      </NavLink>
                      <ul className="menu-level-2">

                        {token && decoded.roles === "[ROLE_USER]" ?
                          <li className="item-menu-level-2">
                            <NavLink className="nav-link-icon" to="/auth/profile" tag={Link}>
                              {/* <CgMenuBoxed style={{ fontSize: "18.5px" }} /> */}
                              <i className="ni ni-calendar-grid-58" />
                              <span className="nav-link-inner--text">Đơn hàng</span>
                            </NavLink>
                            <DropdownItem divider />
                          </li>
                          : ''}
                        <li className="item-menu-level-2">
                          <NavLink className="nav-link-icon" to="/admin/index" tag={Link} onClick={logout}
                          >
                            <i className="ni ni-user-run" />
                            <span className="nav-link-inner--text">Đăng xuất</span>
                          </NavLink>
                        </li>
                      </ul>

                    </li>
                  </ul>
                </div>
                :
                <NavItem>
                  <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">Đăng nhập</span>
                  </NavLink>
                </NavItem>
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
