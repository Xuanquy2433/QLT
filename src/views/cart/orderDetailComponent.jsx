import  './OrderDetailComponent.css';
import Countdown from 'react-countdown';
function OrderDetailComponent({orderDetail}) {

  const renderer = ({ hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Đã hết hạn</div>;
    } else {
      // Render a countdown
      return <span className="detail-time">{hours}:{minutes}</span>;
    }
  };

  return (
      <div className="wrapper">
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