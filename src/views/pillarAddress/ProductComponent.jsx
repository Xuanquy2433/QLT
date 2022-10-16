import Countdown from "react-countdown";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";

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

  const buttons = (isPreOrdered, isAvailable) => {
    if (isAvailable) {
      return <button className="btn btn-success">Thêm vào giỏ</button>
    }
    if (!isPreOrdered) {
      return <button className="btn btn-success">Đặt hàng</button>
    }

  }

  return (
    <div style={{ display: "flex", width: " 100%", flexWrap: "wrap", justifyContent: "center" }}>
      {
        product.map((item, index) => (
          <div style={{ float: "left", backgroundColor: "#ddd", width: "48%", margin: "5px", display: "flex", padding: "20px", borderRadius: "8px", }}>
            <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <img style={{ width: '75%', borderRadius: "8px" }} src={item.photosImagePath} alt="" />
            </div>
            <div style={{ width: "50%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h1 style={{ fontSize: "34px" }}>Tên trụ: {item.name}</h1>
              <h2>Giá: {item.price}</h2>
              <h3>Loại trụ: {item.category.name}</h3>
              <h4>Mô tả: {item.description}</h4>
              {buttons(product.isPreOrdered, product.status === "AVAILABLE")}
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