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
    useEffect(() => {
        getAddress()
    }, [])

    const getAddress = async (e) => {
        const response = await axios.get(API_GET_ADDRESS_DETAIL_USER + id[0])
        if (response.status === 200) {
            setDataAddressProduct(response.data.product)
            setAddress(response.data.address)
        }
    }
    console.log('adđ, ', address);

    return (
        <div className='de'  >
            {address ?
                <div style={{ display: "flex", justifyContent: "space-between" ,backgroundColor: 'white'}} className="address-detail">
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


                    <div className="container">
                        <div className="header">
                            <div className="header-logo">Thông tin trụ </div>
                            <nav className="header-nav">
                                <i className="ion-ios-cart" />
                                <div />
                            </nav>
                        </div>
                        <div className="product">
                            <div className="product-photo">
                                <img style={{width: '46%',height: '20vh'}} src="https://preview.ibb.co/kwZJhR/photo_1504051771394_dd2e66b2e08f.jpg" />
                                <img style={{width: '50%',height: '35vh'}}  src="https://preview.ibb.co/fmOB2R/photo_1504051898397_67f872da760b.jpg" />
                            </div>
                            <div className="product-detail">
                                <h1 className="product__title">Thành phố {address.city}  </h1>
                                <div className="product__price">Đường {address.street}</div>
                                <div className="product__subtitle">
                                {address.description}
                                </div>
                                <div className="product__color">
                                    <form action="">
                                        <fieldset>
                                            <input type="radio" name="color" />
                                            <label htmlFor="straw">
                                                <i className="ion-android-done" />
                                            </label>
                                        </fieldset>
                                        <fieldset>
                                            <input type="radio" name="color" />
                                            <label htmlFor="brown">
                                                <i className="ion-android-done" />
                                            </label>
                                        </fieldset>
                                    </form>
                                </div>
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


            {/* <ProductComponent product={dataAddressProduct} /> */}

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

    )
}

export default AddressDetail