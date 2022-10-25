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
import styled from "styled-components";
import './login.css'
import { API_FORGOTPASSWORD } from "utils/const";

const ForgotPassword = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: "",
    });

    const [isLoading, setIsLoading] = useState(false)

    console.log('data ,', data);
    const onForgetPassword = async (e) => {
        e.preventDefault();
        if (data.email === '') {
            toast.error('Email không được để trống', {
                autoClose: 2000
            })
        }
        else {
            setIsLoading(true)
            try {
                const response = await axios.post(API_FORGOTPASSWORD + data.email).then((res) => {
                    toast.success('Vui lòng kiểm tra email của bạn', {
                        autoClose: 3000
                    }).finally(() => setIsLoading(false))
                })
            } catch (error) {
                setIsLoading(false)
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
            <Col style={{ paddingLeft: '80px', paddingRight: '80px' }} lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div style={{ textAlign: "center", fontSize: "33px", color: "#172B4D" }}>
                            <small style={{ fontWeight: "500" }}>Quên mật khẩu</small>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Vui lòng nhập email của bạn để lấy lại mật khẩu.</small>
                        </div>
                        <Form role="form" >
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        placeholder="Nhập email"
                                        type="email"
                                        autoComplete="new-email"
                                        require
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center">
                                <Button style={{ width: "100%", margin: "0" }} disabled={isLoading} className="" color="primary" type="submit" onClick={(e) => onForgetPassword(e)}>
                                    {isLoading ? "Vui lòng chờ..." : "Gửi"}
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                        <div
                            to={'/auth/login'}
                            className="text-light"
                        >
                            <small>Đã có tài khoản?
                                <NavLink to={'/auth/login'}>Đăng nhập</NavLink>
                            </small>
                        </div>
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

export default ForgotPassword;
