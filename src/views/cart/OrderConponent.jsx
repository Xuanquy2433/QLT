import './OrderComponent.css';
import { useEffect, useState } from "react";
import OrderDetailComponent from "./orderDetailComponent";
import Moment from 'react-moment';
import { formatMoney } from 'common/formatMoney';
import OrderStatus from "../../components/OrderStatus";

function Order({ order, ya,updatingComponent}) {

  const [isExpanded, setIsExpanded] = useState(true);
  const [listIds, setListIds] = useState([]);




  let checkIdHasBeen = true

  const expandOrder = () => {
    setIsExpanded(!isExpanded);
  }

  const getCheckIds = (data) => {
    if (data.isChecked) {
      // eslint-disable-next-line array-callback-return
      listIds.map((item => {
        if (item.productId === data.id) {
          checkIdHasBeen = false
        }
      }))

      if (checkIdHasBeen === true) {
        setListIds([...listIds, {
          productId: data.id,
          month: Number(data.month)
        }]);
      }
    }
    else {
      listIds.splice(listIds.indexOf(data.id), 1)
    }
  }




  let idOrderInURL = window.location.pathname.replace(/\D/g, "");

  useEffect(() => {
    updatingComponent(idOrderInURL)
  }, [idOrderInURL]);

  return (
    <div className="wrapper">
      <div className={`${order.status}`} >

        <div onClick={() => expandOrder()}>

          <div className="row">
            <div className="col" style={{ width: '100%' }}>
              <ul className="list-group shadow">

                <li style={{ padding: '0' }} className="list-group-item">
                  <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div className="media-body order-2 order-lg-1">
                      <h5 className="mt-0 font-weight-bold mb-2"> Thời gian đặt:
                        <Moment format="DD/MM/YYYY">
                          {order.orderTime}
                        </Moment> </h5>
                      <p className="font-italic text-muted mb-0 small">Tổng cộng : {formatMoney(order.total)} VNĐ</p>
                      <div className="d-flex align-items-center mt-1">
                        <h6 className="font-weight-bold my-2">Số lượng : {order.quantity}</h6>
                        <h6 className="font-weight-bold my-2 ml-8">Trạng thái : <OrderStatus status={order.status}/></h6>


                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }} className='mr-2'>
                    <Moment fromNow>{order.orderTime}</Moment>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div style={{
        display: ya === undefined || ya === null ? "block" :
          isExpanded ? "none" : "block"
      }}>

        {order.orderDetail?.map((orderDetail) => (
          <OrderDetailComponent
            orderDetail={orderDetail}
          />
        ))}
      </div>
    </div>
  )
}
export default Order;
