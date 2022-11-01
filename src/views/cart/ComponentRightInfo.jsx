import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { BsFiles } from 'react-icons/bs'
import Moment from 'react-moment'
import { toast } from 'react-toastify'
import { API_BANK_GET } from 'utils/const'
import ShowBank from './ShowBank'

function ComponentRightInfo({ reOrder, listBank, data, renderer, checkout, isConfirm, valueStatus, onChangeExtendedStatus }) {
    function copy(text) {
        navigator.clipboard.writeText(text)
        toast.success(`Sao chép thành công`, {
            autoClose: 500
        })
    }
    const [dataBanks, setDataBanks] = useState([])
    const [idDataBanks, setIdDataBanks] = useState()

    const fetchAPI = async () => {
        const response = await axios.post(API_BANK_GET)
        if (response.status === 200) {
            setDataBanks(response.data)
            setBank(response.data[0].id)
        }
    }

    const [bank, setBank] = useState()
    const handleChange = (event) => {
        setBank(event.target.value);
    };

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <React.Fragment>
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

                        <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeName">
                                    Tên chủ tài khoản
                                </label>
                                <p
                                    className="form-control form-control-lg"
                                    style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}
                                >
                                    {dataBanks.map(item => {
                                        if (item.id == bank) {
                                            return (
                                                item.bankAccountName
                                            )
                                        }
                                    })}
                                </p >
                            </div>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeText">
                                    Số tài khoản
                                </label>
                                {/* <ShowBank bank={dataBanks} listBank={listBank} /> */}
                                <p
                                    className="form-control form-control-lg"
                                    style={{ color: 'black', backgroundColor: 'white', fontWeight: 600 }}>
                                    {dataBanks.map(item => {
                                        if (item.id == bank) {
                                            return (
                                                item.bankAccountNumber
                                            )
                                        }
                                    })}
                                </p >
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-5">
                                    <div className="form-outline form-white">
                                        <label className="form-label mt-1" htmlFor="typeText">
                                            Tên ngân hàng
                                        </label>
                                        <select className="form-control form-control-lg"
                                            style={{ paddingRight: '0', paddingLeft: '1', color: 'black', fontWeight: 600, cursor: 'pointer' }}
                                            onChange={handleChange}
                                            aria-label="Default select example">
                                            {
                                                dataBanks.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.bankName}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6-9">
                                    <div className="form-outline form-white" style={{ paddingRight: '0', paddingLeft: '0' }}>
                                        <label className="form-label mt-1" htmlFor="typeText">
                                            Mã đặt hàng
                                        </label>
                                        <p
                                            className="form-control form-control-lg"
                                            style={{ color: 'black', backgroundColor: 'white', fontWeight: 600, paddingRight: '0' }}
                                        > {data.orderCode}
                                            <BsFiles onClick={() => copy(data.orderCode)} style={{ marginLeft: "7px", cursor: 'pointer', fontSize: "18px", marginRight: "5px" }} />
                                        </p >
                                        {/* <button onClick={() => copy('someText')}
                                                                    >copy</button> */}
                                    </div>
                                </div>
                            </div>

                        </form>
                        {data.status === 'NEW' ? <div style={{ color: 'yellow' }}>
                            Vui lòng thanh toán trước: <Moment style={{ marginRight: '5px' }} format="hh:mm  DD/MM/YYYY">{data.cancelTime}</Moment>.
                            {/* <Countdown date={Date.now() + 3602000} renderer={renderer} /> */}
                            <h5 className='mt-3' style={{ color: 'yellow', marginTop: '5px' }}> Vui lòng liên hệ <span style={{ color: 'white' }}>0982.123.12 </span> để gia hạn thêm thời gian chờ.</h5>
                        </div> : ''}

                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Tổng cộng</p>
                            <p className="mb-2"> {data.children ? data.children.reduce((a, b) => data.total + a + b.total, 0) : data.total} VNĐ</p>

                        </div>

                        <button
                            onClick={checkout}
                            disabled={isConfirm}
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                        >
                            {valueStatus}
                            {data.status === 'NEW'
                                && <div className="d-flex justify-content-between">
                                    <span>{data.total} VNĐ</span>
                                    <span>
                                        Thanh toán
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

                            {data.status === 'EXTEND' &&
                                <div style={{ color: 'yellow' }} className="d-flex justify-content-between">
                                    <span>
                                        Gia hạn !
                                    </span>
                                </div>
                            }

                            {data.status === 'CANCELLED' &&
                                < div style={{ color: 'yellow' }} className="d-flex justify-content-between">
                                    <span>
                                        Đơn hàng này đã bị hủy !
                                    </span>
                                </div>
                            }
                            {data.status === 'PAID' || data.status === 'DONE' ?
                                <div className="d-flex justify-content-between">
                                    <span>
                                        Đã xác nhận !
                                    </span>
                                </div>
                                : null}

                        </button>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ComponentRightInfo