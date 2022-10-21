import './OrderDetailComponent.css';
import Countdown, { zeroPad } from 'react-countdown';
import { useEffect, useState } from "react";

function OrderDetailComponent(props) {
  const [data, setData] = useState({
    id: "",
    isChecked: false,
  });
  const { orderDetail, hasParent, sendDataBack, isExtended, orderStatus } = props;
  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Đã hết hạn</div>;
    } else {
      // Render a countdown
      return <span className="detail-time">{zeroPad(hours)}:{zeroPad(minutes)}</span>;
    }
  };

  useEffect(() => {
    sendDataBack(data);
  }, [data])

  const onChange = (e) => {
    // if (e.target.checked===true) {
    //   props.sendDataBack(e.target.value);
    // }
    setData(a => ({ ...a, id: e.target.value, isChecked: e.target.checked }));
  }
  return (
    <div className="wrapper-detail">
      <input style={{ display: !hasParent && !isExtended && !orderStatus ? 'block' : 'none' }} type="checkbox"
        onChange={(e) => onChange(e)} id={orderDetail.product.id}
        value={orderDetail.product.id} />
      <div className="detail-name">Tên: {orderDetail.product.name}</div>
      <div className="detail-price">Tổng :{orderDetail.product.price}</div>
      <div className="detail-month"> {orderDetail.month}</div>
      <Countdown
        date={orderDetail.expiredDate}
        renderer={renderer}
      ></Countdown>
    </div>
  )
}


export default OrderDetailComponent;