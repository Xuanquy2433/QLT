/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
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


const AdminNavbar = () => {
  let decoded;
  const history = useHistory();

  console.log("ccccccccccccccccc ", decoded);
  let token = localStorage.getItem("token");
  if (token !== null) {
    decoded = jwt_decode(token);
  }
  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    history.push('/auth/homePage')
    toast.success('Logout success')
    // window.location.reload(false)

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
            <h3 style={{ fontSize: "2.5em", fontWeight: 800, color: 'white' }}>LOGO</h3>
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
                  <span className="nav-link-inner--text">Dashboard</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/auth/cart" tag={Link}>
                  <i className="ni ni-cart" />
                  <span className="nav-link-inner--text">Cart</span>
                </NavLink>
              </NavItem>
              <NavItem>
                {token && decoded ? '' : <NavLink
                  className="nav-link-icon"
                  to="/auth/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>}
              </NavItem>
              <NavItem>
                {token && decoded ? '' : <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>}
              </NavItem>

              <NavItem>
                {decoded && token ? <NavLink
                  className="nav-link-icon"
                  to="/admin/index"
                  tag={Link}
                >
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">{decoded.firstName + " " + decoded.lastName}</span>
                </NavLink> : ''}
              </NavItem>
              <NavItem>
                {decoded && token ? <NavLink
                  className="nav-link-icon"
                  to="/admin/index"
                  tag={Link}
                  onClick={logout}
                >
                  <i className="ni ni-user-run" />
                  <span className="nav-link-inner--text">Logout</span>
                </NavLink> : ''}
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
