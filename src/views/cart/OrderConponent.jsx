import './OrderComponent.css';
import { useEffect, useState } from "react";
import OrderDetailComponent from "./orderDetailComponent";

function Order({order, isExtended, ya}) {

  const [isExpanded, setIsExpanded] = useState(true);
  const [childData, setChildData] = useState({});
  const listIds = [];
  const [data, setData] = useState("")

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

  let idOrderInURL = window.location.pathname.replace(/\D/g, "");
  useEffect(() => {
    getCheckIds(childData);
  }, [childData])

  return (
    <div className="wrapper">
      <button style={{display: order.id === parseInt(idOrderInURL) ? "none" : "block"}}>chi tiet {order.id}</button>
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

      <div style={{ display:  ya === undefined || ya === null? "block" :
      isExpanded ? "none" : "block" }}>

        {order.orderDetail?.map((orderDetail) => (
            <OrderDetailComponent
            orderDetail={orderDetail}
            hasParent={order.hasParent}
            sendDataBack={setChildData}
            isExtended={isExtended}
            orderStatus={order.status==="DONE"}
            />
        ))}
      </div>
      <div>
        {(order.hasChildren ? order.children.map(
          (child) =>{
          return(<Order order={child} ya={!isExpanded}/>)
        }) : null)}
      </div>
    </div>

  )

}
export default Order;
