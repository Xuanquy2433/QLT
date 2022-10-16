import './OrderComponent.css';
import { useEffect, useState } from "react";
import OrderDetailComponent from "./orderDetailComponent";

function Order({order, isExtended, orderData}) {

  const [isExpanded, setIsExpanded] = useState(true);
  const [childData, setChildData] = useState({});
  const [data, setData] = useState({});
  const listIds = [];
  const expandOrder = () => {
    setIsExpanded(!isExpanded);
  }
  const getCheckIds = (data) => {
    if (data.isChecked) {
      listIds.push(data.id);
    } else {
      listIds.splice(listIds.indexOf(data.id), 1);
    }
    console.log(listIds);
  }

  useEffect(() => {

    getCheckIds(childData);
  }, [childData]);

  return (
    <div className="wrapper">
      <div className={`${order.status}`} >
        <div onClick={() => expandOrder()}>
        <div className="order-info">
          <div>số lượng: {order.quantity}</div>
          <div>tổng cộng:{order.total}</div>
        </div>
        <div className="order-status">
          <div>order time:{order.orderTime}</div>
          <div>trạng thái:{order.status}</div>
        </div>
        </div>
      </div>

      <div style={{ display: isExpanded && order.hasParent ? "none" : "block" }} >
        {order.orderDetail?.map((orderDetail) => (
            <OrderDetailComponent
            orderDetail={orderDetail}
            hasParent={order.hasParent}
            sendDataBack={setChildData}
            isExtended={isExtended} />
        ))}
      </div>


      <div>
        {(order.hasChildren ? order.children.map(
          (child) =>{
          return(<Order order={child} />)
        }) : "")}
      </div>
    </div>

  )

}
export default Order;
