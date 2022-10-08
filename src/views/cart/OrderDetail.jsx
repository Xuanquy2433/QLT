import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_CONFIRM_PAYMENT } from 'utils/const';
import { API_GET_ORDER_DETAIL } from 'utils/const';

function OrderDetail() {


    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    console.log("id order ", id);

    const [isConfirm, setIsConFirm] = useState(false)
    const [valueStatus, setValueStatus] = useState('')
    const [dataDetail, setDataDetail] = useState([])
    const [data, setData] = useState([])
    console.log(valueStatus);
    console.log("deta");
    console.log("data", data.orderCode);
    console.log(data.status);
    console.log(dataDetail);
    const history = useHistory()

    let token = localStorage.getItem('token')
    const getAllOderDetail = async (e) => {
        if (token) {
            const response = await axios.get(API_GET_ORDER_DETAIL + id, {
                headers: {
                    'authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (response) {
                setDataDetail(response.data.orderDetail)
                setData(response.data)

            }
        } else {
            toast.success('Please login', {
                autoClose: 3000
            })
            history.push('/auth/login')
        }
    }


    const checkout = async () => {
        console.log('checkout ');
        try {
            if (token) {
                if (data.status === 'NEW') {
                    setIsConFirm(true)
                    const response = await axios.put(API_CONFIRM_PAYMENT + id, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response && response.status === 200) {
                        toast.success('Success', {
                            autoClose: 3000
                        })
                        setTimeout(() => {
                            window.location.reload()
                        }, 1800);
                    };
                    setIsConFirm(true)
                }
            } else {
                toast.success('Please login', {
                    autoClose: 3000
                })
                history.push('/auth/login')
            }
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

    useEffect(() => {
        getAllOderDetail()
        if (data.status === 'NEW') {
            setValueStatus('Thanh toán')
            setIsConFirm(false)
        } else if (data.status === 'USER_CONFIRMED') {
            setValueStatus('Vui lòng chờ admin phê duyệt đơn hàng của bạn !')
            setIsConFirm(true)
        } else if (data.status === 'CANCELLED') {
            setValueStatus('Bạn đã huỷ đơn hàng này')
            setIsConFirm(true)
        } else if (data.status === 'PAID') {
            setValueStatus('Đã xác nhận')
            setIsConFirm(true)
        }
    }, [])


    return (
        <div style={{ marginTop: '20px', backgroundColor: 'white' }}>

            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div style={{ width: '1000px' }} >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <NavLink to={'/auth/cart'} className="text-body">
                                                    <i className="fas fa-long-arrow-alt-left me-2" />
                                                    Continue shopping
                                                </NavLink>
                                            </h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-0">You have {dataDetail.length} items </p>
                                                </div>
                                            </div>


                                            {dataDetail ?
                                                dataDetail.map((item, index) => (
                                                    <div className="card mb-3" key={index}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <img
                                                                            src="https://onlinecrm.vn/media/default.jpg"
                                                                            className="img-fluid rounded-3"
                                                                            alt="Shopping item"
                                                                            style={{ width: 65, marginRight: '20px' }}
                                                                        />
                                                                    </div>
                                                                    <div className="ms-3" style={{ width: 150 }}>
                                                                        <h5>{item.product.name}</h5>
                                                                        <p className="small mb-0">{item.product.description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{ width: 100 }}>
                                                                        <h5 className="fw-normal mb-0">{item.month} Month</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{ width: 60 }}>
                                                                        <h5 className="mb-0">{item.product.price}</h5>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))

                                                : <h2> Chưa có sản phẩm nào </h2>}


                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Thông tin chủ tài khoản</h5>
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            className="img-fluid rounded-3"
                                                            style={{ width: 45 }}
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                    <p className="small mb-2">Vui lòng chuyển khoản vào STK bên dưới</p>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-mastercard fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-visa fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-amex fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-paypal fa-2x" />
                                                    </a>
                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <p
                                                                className="form-control form-control-lg"
                                                                style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}
                                                            > NGUYEN VAN A</p >
                                                            <label className="form-label" htmlFor="typeName">
                                                                Cardholder's Name
                                                            </label>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <p
                                                                className="form-control form-control-lg"
                                                                style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}
                                                            > 123 5678 89099 899</p >
                                                            <label className="form-label" htmlFor="typeText">
                                                                Card Number
                                                            </label>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-5">
                                                                <div className="form-outline form-white">
                                                                    <p
                                                                        className="form-control form-control-lg"
                                                                        style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}
                                                                    > MB BANK</p >
                                                                    <label className="form-label" htmlFor="typeExp">
                                                                        Bank
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6-9">
                                                                <div className="form-outline form-white">
                                                                    <p
                                                                        className="form-control form-control-lg"
                                                                        style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}
                                                                    > {data.orderCode}
                                                                    </p >
                                                                    <label className="form-label" htmlFor="typeText">
                                                                        Mã đặt hàng
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">{data.total} VNĐ</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">0</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">{data.total} VNĐ</p>
                                                    </div>
                                                    <button
                                                        onClick={checkout}
                                                        disabled={isConfirm}
                                                        type="button"
                                                        className="btn btn-info btn-block btn-lg"
                                                    >
                                                        {valueStatus}
                                                        {/* {data.status === 'NEW'
                                                            && <div onClick={checkout} className="d-flex justify-content-between">
                                                                <span>{data.total} VNĐ</span>
                                                                <span>
                                                                    Checkout{" "}
                                                                    <i className="fas fa-long-arrow-alt-right ms-2" />
                                                                </span>
                                                            </div>
                                                        }

                                                        {data.status === 'USER_CONFIRMED' &&
                                                            <div style={{ color: 'yellow' }} className="d-flex justify-content-between">
                                                                <span>
                                                                    Vui lòng chờ admin phê duyệt đơn hàng của bạn !
                                                                </span>
                                                            </div>
                                                        }

                                                        {data.status === 'CANCELLED' &&
                                                            < div style={{ color: 'yellow' }} className="d-flex justify-content-between">
                                                                <span>
                                                                    Bạn đã hủy đơn hàng này !
                                                                </span>
                                                            </div>
                                                        }
                                                        {data.status === 'PAID' &&
                                                            <div className="d-flex justify-content-between">
                                                                <span>
                                                                    Đã xác nhận !
                                                                </span>
                                                            </div>
                                                        } */}

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >


        </div >
    )
}

export default OrderDetail