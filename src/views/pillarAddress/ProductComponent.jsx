import Countdown from "react-countdown";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_ADD_CART } from "utils/const";
import { Button } from "@mui/material";
import { formatMoney } from "common/formatMoney";

function ProductComponent({ product }) {

  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Đã hết hạn</div>;
    } else {
      // Render a countdown
      return <span className="detail-time">{hours}:{minutes}</span>;
    }
  };

  const buttons = (isPreOrdered, isAvailable,) => {
    if (isAvailable) {
      return <button className="btn btn-success">Thêm vào giỏ</button>
    }
    if (!isPreOrdered) {
      return <button className="btn btn-success">Đặt hàng</button>
    }

  }


  const history = useHistory()

  let token = localStorage.getItem('token')

  const addCart = async (item) => {

    // save product to cart local
    const { id, name } = item;
    let listCart = localStorage.getItem("cartTemp")
    let listCartADD = localStorage.getItem("cartADD")

    let listCartItem = []
    let listCartADDItem = []

    if (listCart && listCartADD != undefined) {
      listCartItem = JSON.parse(listCart)
      listCartADDItem = JSON.parse(listCartADD)
    }
    let checkCartHasBeen = true

    try {
      if (token) {
        // when already login
        const response = await axios.post(API_ADD_CART, {
          day: 1,
          productId: id
        }, {
          headers: {
            'authorization': 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        if (response && response.status === 201) {
          toast.success('Thêm vào giỏ hàng thành công', {
            autoClose: 3000
          })
          history.push('/auth/cart')
        };
      } else {
        // when don't login
        for (let i = 0; i < listCartItem.length; i++) {
          if (listCartItem[i].productId === item.id && listCartADDItem[i].productId === item.id) {
            // localStorage.setItem('cartTemp', JSON.stringify(listCartItem));
            checkCartHasBeen = false
          }
        }
        if (checkCartHasBeen == true) {
          let items = {
            day: 1,
            productId: item.id,
            nameProduct: item.name,
            priceProduct: item.price,
            imageProduct: item.photosImagePath
          }
          let itemsADD = {
            day: 1,
            productId: item.id
          }

          listCartItem.push(items)
          listCartADDItem.push(itemsADD)
          localStorage.setItem('cartTemp', JSON.stringify(listCartItem));
          localStorage.setItem('cartADD', JSON.stringify(listCartADDItem));
        }
        toast.success('Thêm vào giỏ hàng thành công', {
          autoClose: 3000
        })
        history.push('/auth/cart')
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

  return (
    <div style={{ display: "flex", width: " 100%", flexWrap: "wrap", justifyContent: "center" ,marginTop: '50px'}}>
      {
        product.map((item, index) => (
          <div style={{ float: "left", backgroundColor: "#ddd", marginTop: '10px',width: "45%", margin: "5px", display: "flex", padding: "20px", borderRadius: "8px", }}>
            <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <img style={{ width: '75%', borderRadius: "8px" }} src={item.photosImagePath} alt="" />
            </div>
            <div style={{ width: "50%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h1 style={{ fontSize: "2em", marginBottom: '10px' }}> {item.name}</h1>
              <h2 style={{ color: '#32cd32' }}> {formatMoney(item.price)} VNĐ</h2>
              <h3>Loại trụ: {item.category.name}</h3>
              <h4> {item.description}</h4>
              {item.status === 'AVAILABLE' ?
                <Button onClick={(e) => addCart({ ...item })} variant="contained" color="success">
                  Thêm vào giỏ
                </Button> :
                <Button disabled variant="contained" >
                  Đã cho thuê
                </Button>}
            </div>
          </div>
        ))
      }</div>
    // <TableRow hover role="checkbox" >
    //   <TableCell sx={{}}>
    //     <img style={{ width: '80px', borderRadius: "8px" }} src={product.photosImagePath} alt="" />
    //   </TableCell>
    //   <TableCell sx={{ textAlign: 'center' }}>{product.name}</TableCell>
    //   <TableCell sx={{ textAlign: 'center' }}>{product.category.name}</TableCell>
    //   <TableCell sx={{ textAlign: 'center' }}>{product.price}</TableCell>

    //   <TableCell sx={{ textAlign: 'right' }}>
    //     <Countdown
    //       date={product.expiredDate}
    //       renderer={renderer}
    //     ></Countdown>
    //     {buttons(product.isPreOrdered, product.status === "AVAILABLE")}
    //   </TableCell>
    // </TableRow>

  )
}


export default ProductComponent;