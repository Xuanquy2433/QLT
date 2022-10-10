import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { API_PLACE_ORDER } from 'utils/const'
import { API_CART_REMOVE } from 'utils/const'
import { API_GET_CART } from 'utils/const'
import './cart.css'
import { formatMoney } from './../../common/formatMoney';

function Cart() {

    const [data, setData] = useState([])
    const [month, setMonth] = useState(1)
    // const [btnOrders, setBtnOrders] = useState('Đặt hàng')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const history = useHistory()
    let token = localStorage.getItem('token')

    const getAllCart = async (e) => {
        const response = await axios.get(API_GET_CART, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response) {
            setData(response.data)
        }
    }

    const handleUpdateMonth = () => {
        setMonth(month + 1)
    }

    const handleMonth = () => {
        if (month > 1) {
            setMonth(month - 1)
        }
    }

    const [idOrder, setIdOrder] = useState()


    const clickOrder = async () => {
        // setBtnOrders('Vui lòng chờ...')
        // setBtnDisabled(true)
        try {
            if (token) {
                const response = await axios.post(API_PLACE_ORDER, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                if (response && response.status === 200) {
                    console.log("iddddd ",response.data.message);
                    toast.success('Success', {
                        autoClose: 3000
                    })
                    setTimeout(() => {
                        history.push('/auth/order/' + response.data.message.replace(/\D/g, ""))
                    }, 2000);
                    setBtnDisabled(true);
                };
                // setBtnOrders('Vui lòng chờ...')
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
    let sum = 0
    data.map((item) => {
        sum += (Number(item.product.price) * Number(item.month))
    })

    useEffect(() => {
        getAllCart()
    }, [])

    const onClickRemoveItemCart = async (id) => {
        console.log('id cart', id);
        const response =await axios.put(API_CART_REMOVE + id, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            toast.success("Xoá thành công", { autoClose: "1500" })
            getAllCart()
        }
    }


    return (
        <div style={{ marginTop: '20px' }} >
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{data.length} items</h6>
                                                </div>
                                                {data.length ?
                                                    <div style={{ display: "flex", flexDirection: "row", width: "100%" }} className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img

                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Name pillar</h6>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "center" }} className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Month</h6>
                                                        </div>
                                                        {/* <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Description</h6>
                                                            <h6 className="text-black mb-0">{item.product.description}</h6>
                                                        </div> */}
                                                        <div style={{ display: "flex", justifyContent: "center" }} className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Price</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1">
                                                            <h6 className="text-muted"></h6>                                                        </div>
                                                    </div> : ''}
                                                <hr className="my-4" />
                                                {data.length ? data.map((item) => (
                                                    <div style={{ display: "flex", flexDirection: "row", width: "100%" }} className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src="https://onlinecrm.vn/media/default.jpg"
                                                                className="img-fluid rounded-3"
                                                                alt="Cotton T-shirt"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            {/* <h6 className="text-muted">Shirt</h6> */}
                                                            <h6 className="text-black mb-0">{item.product.name.substring(0, 17)}</h6>
                                                        </div>
                                                        <div style={{ alignItems: "center", justifyContent: "end" }} className="col-md-3 col-lg-3 col-xl-3 d-flex">
                                                            <button
                                                                className="btn btn-link px-2"
                                                                onClick={handleMonth}
                                                            >
                                                                <i className="fas fa-minus" />
                                                            </button>
                                                            <input
                                                                style={{ width: '50px' }}
                                                                id="form1"
                                                                min={1}
                                                                name="quantity"
                                                                value={item.month}
                                                                type="number"
                                                                className="form-control form-control-sm"
                                                            />
                                                            <button
                                                                className="btn btn-link px-2"
                                                                onClick={handleUpdateMonth}
                                                            >
                                                                <i className="fas fa-plus" />
                                                            </button>
                                                        </div>
                                                        {/* <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-black mb-0">{item.month}</h6>
                                                        </div> */}
                                                        {/* <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Description</h6>
                                                            <h6 className="text-black mb-0">{item.product.description}</h6>
                                                        </div> */}
                                                        <div style={{ display: "flex", justifyContent: "center" }} className="col-md-3 col-lg-3 col-xl-3">
                                                            {/* <h6 className="text-muted">Price</h6> */}
                                                            <h6 className="text-black mb-0">{formatMoney(item.product.price)}</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <div style={{ cursor: 'pointer' }} className="text-muted">
                                                                <i onClick={() => onClickRemoveItemCart(item.product.id)} className="fas fa-times" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) :
                                                    <div style={{ width: "100%" }} >
                                                        <div style={{ width: '500px', clear: 'both', textAlign: 'center' }}>
                                                            <p>Chưa có sản phẩm nào !</p>
                                                        </div>
                                                    </div>
                                                }
                                                <hr className="my-4" />

                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <NavLink to={'/auth/homePage'} className="text-body">
                                                            <i className="fas fa-long-arrow-alt-left me-2" />
                                                            Back to shop
                                                        </NavLink>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <p  className="fw-bold mb-5 mt-2 pt-1">Thông tin</p>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <h5 className="">Name</h5>
                                                    <h5>Price</h5>
                                                </div>
                                                <hr className="my-4" />
                                                <div style={{ display: "flex", flexDirection: "column" }} className="ase">
                                                    {
                                                        data.map((item) => (
                                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                <h5 className="text-uppercase">{item.product.name.substring(0, 15)}</h5>
                                                                <h5>{formatMoney(item.product.price)}</h5>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                                {/* <h5 className="text-uppercase mb-3">Shipping</h5>
                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                        <option value={4}>Four</option>
                                                    </select>
                                                </div> */}
                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Examplea2"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Examplea2">
                                                            Enter your code
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                {data.length ?
                                                    <>
                                                        <div className="d-flex justify-content-between mb-5">
                                                            <h5 className="text-uppercase">Tổng giá</h5>
                                                            <h5>{formatMoney(sum)}</h5>
                                                        </div>
                                                        <button
                                                            disabled={btnDisabled}
                                                            type="button"
                                                            className="btn btn-dark btn-block btn-lg"
                                                            data-mdb-ripple-color="dark"
                                                            onClick={clickOrder}
                                                        >

                                                            {btnDisabled ? 'Vui lòng chờ...' : 'Đặt hàng'}
                                                        </button>
                                                    </> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart