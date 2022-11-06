import React, { useEffect, useState } from 'react'
import './css.css'
import './detail.scss'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { API_GET_PILLAR } from 'utils/const';
import ProductComponent from "./ProductComponent";
import { API_GET_ADDRESS_DETAIL_USER } from 'utils/const';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_GET_ADDRESS_DETAIL_NOT_TOKEN } from 'utils/const';
import { showError } from 'utils/error';
import { API_CART_REMOVE } from 'utils/const';

const columns = [
    {
        id: 'Hình ảnh',
        label: 'Hình ảnh',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'name',
        label: 'Tên trụ',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'category',
        label: 'Loai trụ',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'price',
        label: 'Giá',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Hành động',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];


function AddressDetail() {
    const [dataAddressProduct, setDataAddressProduct] = useState([])
    const [address, setAddress] = useState({})
    const id = useState(window.location.pathname.replace(/\D/g, ""));
    console.log(id[0]);
    let token = localStorage.getItem("token");

    const history = useHistory();
    const getAddress = async (e) => {
        try {
            if (!token) {
                const response = await axios.get(API_GET_ADDRESS_DETAIL_USER + id[0])
                if (response.status === 200) {
                    setDataAddressProduct(response.data.product)
                    setAddress(response.data.address)
                }
            } else {
                const response = await axios.get(API_GET_ADDRESS_DETAIL_NOT_TOKEN + id[0], {
                    headers: {
                        'authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if (response.status === 200) {
                    setDataAddressProduct(response.data.product)
                    setAddress(response.data.address)
                }
            }

        } catch (error) {
            if (error && error.response.status === 400 || error.response.status === 404) {
                toast.warning('Không có địa chỉ này !', {
                    autoClose: 3000
                })
                history.push('/auth/pageNotFound')
            }
            else showError(error)
        }
    }
    const onClickRemoveItemCart = async (id) => {
        console.log('id cart', id);
        const response = await axios.put(API_CART_REMOVE + id, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            toast.success("Xoá khỏi giỏ thành công", { autoClose: 1300 })
            getAddress()
        }
    }

    useEffect(() => {
        getAddress()
    }, [])

    return (
        <div >
            <div style={{ marginBottom: "15px" }} className='de'  >
                {address ?
                    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: 'white', width: "96.5%" }} className="address-detail">
                        {/* <div style={{ fontSize: "18px" }}>
                        <div>{address.id}</div>
                        <div >Thành phố: {address.city}</div>
                        <div>Đường: {address.street}</div>
                        <div>Địa chỉ: {address.city} {address.street}</div>
                        <div>Mô tả: {address.description}</div>
                    </div>
                    <div >
                        <img style={{ width: "200px", borderRadius: "8px" }} src={address.photosImagePath} alt="" />
                    </div> */}


                        <div style={{ position: 'sticky' }} className="container">
                            <div className="header">
                                <div className="header-logo">Thông tin trụ </div>
                                <nav className="header-nav">
                                    <i className="ion-ios-cart" />
                                    <div />
                                </nav>
                            </div>
                            <div className="product">
                                <div style={{ backgroundImage: `url(${address.photosImagePath})` }} className="product-photo">
                                    {/* <img style={{ width: '50%', height: '20vh' }} src={address.photosImagePath} />
                                    <img style={{ width: '40%', height: '35vh' }} src={'https://truyenthongacn.com/wp-content/uploads/2022/04/CTY-TRUYEN-THONG-ACN-1222.png'} /> */}
                                </div>
                                <div className="product-detail">
                                    <h1 className="product__title">{address.street} </h1>
                                    <div className="product__price">Thành phố {address.city}  </div>
                                    <div className="product__subtitle">
                                        {address.description}
                                    </div>

                                    <div class="line-loading"></div>
                                </div>
                            </div>
                        </div>



                    </div> :
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="address-detail">
                        <div style={{ fontSize: "18px" }}>
                            <div>Không có địa chỉ này !</div>
                        </div>
                        <div >
                            {/* <img style={{ width: "200px", borderRadius: "8px" }} src={address.photosImagePath} alt="" /> */}
                        </div>
                    </div>
                }



                {/* <Paper sx={{ width: '80%', height: 500, margin: 'auto', overflow: 'hidden', mt: 3, position: 'relative' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{ color: 'black', fontWeight: '600', fontSize: '1em' }}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataAddressProduct.length > 0 ?
                                dataAddressProduct.map((item, index) => (
                                    <ProductComponent key={index} product={item} />
                                )) : <TableCell>Đương này chưa có trụ nào ! </TableCell>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper> */}

            </div>
            <ProductComponent onClickRemoveItemCart={onClickRemoveItemCart} product={dataAddressProduct} />

        </div>
    )
}

export default AddressDetail