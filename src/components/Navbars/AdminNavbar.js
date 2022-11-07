
import { Link, NavLink, useHistory } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  NavItem
} from "reactstrap";
import jwt_decode from "jwt-decode";
import Notification from "./NotificationUser";
import NotificationAdmin from "./NotificationAdmin";
import { toast } from "react-toastify";

const AdminNavbar = (props) => {
  const history = useHistory();
  const logout = () => {
    // alert("ok")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("IdOrder")
    localStorage.removeItem("cartADD")
    localStorage.removeItem("cartTemp")
    history.push('/auth/homePage')
    toast.success('Đăng xuất thành công !', { autoClose: 1500 })
    // window.location.reload(false)

  }
  let decoded;
  let token = localStorage.getItem("token");
  if (token !== null) {
    decoded = jwt_decode(token);
  }
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <p
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"

          >
            {props.brandText}

          </p>

          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <div style={{ marginTop: '15px', cursor: 'pointer' }}>
            <NotificationAdmin />
          </div>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="hihi avatar"
                      src={decoded.avatar}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    {token && decoded ? <span className="mb-0  text-sm font-weight-bold">
                      {decoded.firstName + ' ' + decoded.lastName}
                    </span> : <span className="mb-0  text-sm font-weight-bold">
                      Giang Fam
                    </span>}
                    <i className="ni ni-bold-down ml-1"></i>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu lassName="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/auth/homePage" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Trang chủ</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={logout}>
                  <i className="ni ni-user-run" />
                  <span  >Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
