import  './OrderComponent.css';
import {useEffect, useState} from "react";
import OrderDetailComponent from "./orderDetailComponent";

function Order({order}) {

    return (
        <div className={`${order.status}`}>
          <div className="order-info">
            <div>số lượng: {order.quantity}</div>
            <div>tổng cộng:{order.total}</div>
          </div>
          <div className="order-status">
            <div>order time:{order.orderTime}</div>
            <div>trạng thái:{order.status}</div>
          </div>

            {order.orderDetail?.map((orderDetail) => (
                <OrderDetailComponent orderDetail={orderDetail} />
            ))}

          <div>
            {(order.hasChildren ? order.children.map(
                (child) => <Order order={child}/>
            ) : "")}
          </div>

        </div>
    )

}
export default Order;
