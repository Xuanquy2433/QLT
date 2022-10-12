import  './OrderDetailComponent.css';
import Countdown from 'react-countdown';
import {useEffect, useState} from "react";

function OrderDetailComponent(props) {
const [data, setData] = useState({
  id: "",
  isChecked: false,
});
const {orderDetail, hasChildren, sendDataBack, isExtended} = props;
  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Đã hết hạn</div>;
    } else {
      // Render a countdown
      return <span className="detail-time">{hours}:{minutes}</span>;
    }
  };

  useEffect(() => {
    sendDataBack(data);
  }, [data])

  const onChange = (e) => {
  // if (e.target.checked===true) {
  //   props.sendDataBack(e.target.value);
  // }
  setData(a => ({...a, id: e.target.value, isChecked: e.target.checked}));
}
  return (
      <div className="wrapper-detail">
        <input style={{display: hasChildren && !isExtended ? 'block' : 'none'}} type="checkbox"
               onChange={(e) => onChange(e)} id={orderDetail.product.id}
               value={orderDetail.product.id}/>
        <div className="detail-name">{orderDetail.product.id}</div>
        <div className="detail-name">{orderDetail.product.name}</div>
        <div className="detail-month">{orderDetail.month}</div>
       <Countdown
           date={orderDetail.product.expiredDate}
           renderer={renderer}
       ></Countdown>
      </div>
  )
}


export default OrderDetailComponent;