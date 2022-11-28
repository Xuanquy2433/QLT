import './OrderDetailComponent.css';
import Countdown, { zeroPad } from 'react-countdown';
import { useEffect, useState } from "react";

function OrderDetailComponent(props) {

  const { orderDetail } = props;
  const renderer = ({ days,hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Đã hết hạn</div>;
    } else {
      // Render a countdown
      return <span className="detail-time"> {zeroPad(days)>0?zeroPad(days)+' ngày còn lại':zeroPad(hours)+':'+zeroPad(minutes)+ 'giờ còn lại' } </span>;

    }
  };


  return (
    <div className="wrapper-detail">
      <div className="detail-name">Trụ: {orderDetail.product.name}</div>
      <div className="detail-price">{orderDetail.product.price}</div>
      <div className="detail-month"> {orderDetail.month}</div>

      <Countdown
        date={orderDetail.expiredDate}
        renderer={renderer}
      ></Countdown>
    </div>
  )
}


export default OrderDetailComponent;