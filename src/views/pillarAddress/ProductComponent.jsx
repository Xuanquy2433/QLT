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

  const buttons =(isPreOrdered,isAvailable) => {
    if(isAvailable){
      return <button className="btn btn-success">Thêm vào giỏ</button>
    }
    if(!isPreOrdered){
      return <button className="btn btn-success">Đặt hàng</button>
    }

  }

  return (
    <TableRow hover role="checkbox" >
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.category.name}</TableCell>
      <TableCell sx={{ textAlign: 'right' }}>
        <Countdown
          date={product.expiredDate}
          renderer={renderer}
        ></Countdown>
        {buttons(product.isPreOrdered,product.status==="AVAILABLE")}
      </TableCell>
    </TableRow>

  )
}


export default ProductComponent;