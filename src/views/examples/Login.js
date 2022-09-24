
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_SIGNIN } from "utils/const";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import PhoneInput from 'react-phone-number-input';

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    phoneNumber: "",
    password: "",
  });
  console.log('data ,', data);
  const onLogin = async (e) => {
    e.preventDefault();
    if (data.phoneNumber === '') {
      toast.error('Phone number cannot be null', {
        autoClose: 2000
      })
    } else if (data.password === '') {
      toast.error('Password cannot be null', {
        autoClose: 2000
      })
    }
    else if (data.password.length < 8) {
      toast.error('Password must have at least 8 characters', {
        autoClose: 2000
      })
    }
    else {
      try {
        const response = await axios.post(API_SIGNIN, data);
        if (response && response.status === 200) {
          console.log("Login success, ", response.data);
          // alert("Login success");
          localStorage.setItem("token", response?.data.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          toast.success('Login success', {
            autoClose: 3000
          })
          if (response.data.role === 'ROLE_USER') {
            history.push('/auth/homePage')
          }
          else if (response.data.role === 'ROLE_ADMIN') {
            history.push('/admin/index')
          }
          // setTimeout(() => {
          //     window.location.reload()
          // }, 1000);
        };
      } catch (error) {
        console.log(error.response.data)
        if (error.response.data.message) {
          toast.error(`${error.response.data.message}`, {
            autoClose: 2000
          })
        }
        else if (error.response.data.error) {
          toast.error(`${error.response.data.error}`, {
            autoClose: 2000
          })
        }
        else {
          toast.error('Error', {
            autoClose: 2000
          })
        }
      }
    }
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">

                  </InputGroupAddon>

                  <PhoneInput
                    style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "0.625rem 0.75rem", width: "100%" }}
                    defaultCountry="VN"
                    placeholder="Enter your phone number"
                    onChange={(value) => {
                      setData({ ...data, phoneNumber: value })
                    }} />
                  {/* <Input
                    onChange={(e) => {
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                    }
                    placeholder="Phone number"
                    type="text"
                    autoComplete="new-email"
                  /> */}
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value })
                    }
                    }
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={(e) => onLogin(e)}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
