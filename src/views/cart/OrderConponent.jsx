import  './OrderComponent.css';
import {useEffect, useState} from "react";
import OrderDetailComponent from "./orderDetailComponent";

function Order({order,isExtended}) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [childData, setChildData] = useState({});
    const [listIds, setListIds] = useState([0]);
    const expandOrder = () => {
        setIsExpanded(!isExpanded);
    }

    const getCheckIds = (data) => {
      if (data.isChecked){
        listIds.push(data.id);
      } else {
        listIds.splice(listIds.indexOf(data.id), 1);
      }
      console.log(listIds);
    }

    useEffect(() => {
      getCheckIds(childData);

    }, [childData])





    return (
        <div className="wrapper">
          <div className={`${order.status}`} onClick={() => expandOrder()}>
            <div className="order-info">
              <div>số lượng: {order.quantity}</div>
              <div>tổng cộng:{order.total}</div>
            </div>
            <div className="order-status">
              <div>order time:{order.orderTime}</div>
              <div>trạng thái:{order.status}</div>
            </div>
          </div>

          <div style={{display: isExpanded && !order.hasChildren ? "none" : "block"}} >
            {order.orderDetail?.map((orderDetail) => (
                <OrderDetailComponent orderDetail={orderDetail}
                                      hasChildren={order.hasChildren}
                                      sendDataBack={setChildData}
                                      isExtended={isExtended}/>

            ))}
          </div>
          <div>
            {(order.hasChildren ? order.children.map(
                (child) => <Order order={child} />
            ) : "")}
          </div>
        </div>

    )

}
export default Order;
