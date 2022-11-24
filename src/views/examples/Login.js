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
import { NavLink, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_SIGNIN } from "utils/const";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import PhoneInput from 'react-phone-number-input';
import jwt_decode from "jwt-decode";
import styled from "styled-components";
import './login.css'
import { API_ADD_CART_LOCAL } from "utils/const";
import { API_GET_CART } from "utils/const";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    phoneNumber: "",
    password: "",
  });
  let decoded;
  let token = localStorage.getItem("token");
  if (token !== null) {
    decoded = jwt_decode(token);
  }
  console.log('decoded', decoded);

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
          localStorage.setItem("token", response?.data.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          toast.success('Đăng nhập thành công', {
            autoClose: 1500
          })

          //set count cart
          const response2 = await axios.get(API_GET_CART, {
            headers: {
              'authorization': 'Bearer ' + response?.data.token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          if (response) {
            localStorage.setItem('countCart', JSON.stringify(response2.data.length));
            window.dispatchEvent(new Event("storage"));
          }
          // add cart local to database
          if (jwt_decode(response?.data.token).roles === `[ROLE_USER]`) {
            history.goBack()
            //add cart local to database
            var myMap = new Map()
            JSON.parse(localStorage.getItem('cartADD')).map((item) => {
              myMap.set(item.productId, item.month);
            })
            const obj = Object.fromEntries(myMap);
            const dataCart = {
              productInfo: obj
            }
            const rs = await axios.post(API_ADD_CART_LOCAL, dataCart, {
              headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
          }
          else if (jwt_decode(response?.data.token).roles === `[ROLE_ADMIN]`) {
            history.push('/admin/index')
          }
          else {
            history.push('/auth/homePage')
          }

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
        else if (error.response.data.error && error.response.data.message) {
          toast.error(`${error.response.data.message}`, {
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

  const styledBtn = styled.input`
  border:none;
  `


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div style={{ textAlign: "center", fontSize: "33px", color: "#172B4D", marginBottom: "-20px" }}>
              <small style={{ fontWeight: "500" }}>Đăng nhập</small>
            </div>
            {/* <div className="btn-wrapper text-center">
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
            </div> */}
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Đăng nhập bằng thông tin của bạn</small>
            </div>
            <Form role="form" >
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  {/* <InputGroupAddon addonType="prepend">

                  </InputGroupAddon> */}

                  <PhoneInput
                    style={{ border: "1px solid #ddd", backgroundColor: 'white', borderRadius: "5px", padding: "0.59rem 0.75rem", width: "100%", outline: 'none' }}
                    defaultCountry="VN"
                    placeholder="Nhập số điện thoại"
                    onChange={(value) => {
                      setData({ ...data, phoneNumber: value })
                    }}

                  />
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
                    placeholder="Mật khẩu"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
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
              </div> */}
              <div className="text-center">
                <Button style={{ width: "100%" }} className="my-4" color="primary" type="submit" onClick={(e) => onLogin(e)}>
                  Đăng nhập
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <NavLink
              to={'/auth/forgotPassword'}
              className="text-light"
            >
              <small>Quên mật khẩu?</small>
            </NavLink>
          </Col>
          <Col className="text-right" xs="6">
            <NavLink
              className="text-light"
              to={'/auth/register'}
            >
              <small>Đăng ký tài khoản</small>
            </NavLink>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
