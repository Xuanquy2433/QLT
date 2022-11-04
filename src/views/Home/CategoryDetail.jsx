import React, { useEffect, useState } from 'react'
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
import { API_GET_ADDRESS_DETAIL_USER } from 'utils/const';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_GET_ADDRESS_DETAIL_NOT_TOKEN } from 'utils/const';
import CategoryComponent from './CategoryComponent';
import { API_GET_CATEGORY_BY_ID } from 'utils/const';
import { showError } from 'utils/error';
import usePagination from 'views/pillarAddress/Pagination';
import { Pagination, Stack } from '@mui/material';

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


function CategoryDetail() {
    const [dataCategory, setDataCategory] = useState([])
    const [dataCategoryMap, setDataCategoryMap] = useState([])
    const [address, setAddress] = useState({})
    const id = useState(window.location.pathname.replace(/\D/g, ""));
    console.log(id[0]);
    let token = localStorage.getItem("token");


    const history = useHistory();
    const getCategory = async (e) => {
        try {
            const response = await axios.get(API_GET_CATEGORY_BY_ID + id[0])
            if (response.status === 200) {
                setDataCategory(response.data.category)
                setDataCategoryMap(response.data.categoryMap)
            }
        } catch (error) {
            showError(error)
        }
    }

    // const arrayDataAddress = []
    // const arrayDataPillar = []
    // const dataCategoryMapEntries = new Map(Object.entries(dataCategoryMap));
    // dataCategoryMapEntries.forEach(function (value, key) {
    //     arrayDataAddress.push(key)
    //     arrayDataPillar.push(value)
    // })
    // console.log('arrayDataAddress ', arrayDataAddress);
    // console.log('arrayDataPillar ', dataCategoryMap);


    useEffect(() => {
        getCategory()
    }, [])
    let [page, setPage] = useState(1);
    const PER_PAGE = 1;

    const count = Math.ceil(Object.entries(dataCategoryMap).length / PER_PAGE);
    const _DATA = usePagination(Object.entries(dataCategoryMap), PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    
    return (
        <div >
            <div style={{ marginBottom: "15px" }} className='de'  >
                {address ?
                    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: 'white', width: "96.5%" }} className="address-detail">
                        <div style={{ position: 'sticky' }} className="container">
                            <div className="header">
                                <div className="header-logo">Thông tin trụ </div>
                                <nav className="header-nav">
                                    <i className="ion-ios-cart" />
                                    <div />
                                </nav>
                            </div>
                            <div className="product">
                                <div style={{ backgroundImage: `url(${address.photosImagePath})`, width: '800px' }} className="product-photo">
                                    {/* <img style={{ width: '50%', height: '20vh' }} src={address.photosImagePath} />
                                    <img style={{ width: '40%', height: '35vh' }} src={'https://truyenthongacn.com/wp-content/uploads/2022/04/CTY-TRUYEN-THONG-ACN-1222.png'} /> */}
                                </div>
                                <div className="product-detail">
                                    <h1 className="product__title">{dataCategory.name} </h1>
                                    {/* <div className="product__price">Thành phố {address.city}  </div> */}
                                    <div className="product__subtitle">
                                     Mô tả:    {dataCategory.description}
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
            </div>
            <Stack sx={{ mt: 8 }} alignItems="center">
                <Pagination
                    sx={{ button: { color: '#ffffff', width: '100%', margin: 'auto' } }}
                    count={count} page={page} color="secondary" onChange={handleChange} />
            </Stack>
            {
                _DATA.currentData().length > 0 ? _DATA.currentData().map(([key, value]) => (
                    <CategoryComponent address={JSON.parse(key)} products={value} />
                )) : <h1 style={{ fontSize: "28px", fontWeight: "600", width: '100%', marginTop: '1px', color: "white", textAlign: 'center' }}> Chưa có trụ nào ! </h1>
            }
        </div>
    )
}

export default CategoryDetail