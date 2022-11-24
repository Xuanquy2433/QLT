import React, {useEffect, useState} from "react";
import TableCell from "@mui/material/TableCell";

const ProductStatus = (params) => {
  const [data, setData] = useState({color: "red", status: ""});
  const [status, setStatus] = useState([{
        status: "USER_CONFIRMED",
        color: "blue",
      },
        {status:"NEW",color: "purple"},
        {status:"DONE",color: "green"},
        {status:"CANCELLED",color: "red"},
        {status:"PAID",color: "orange"},
        {status:"EXTEND",color: "pink"},
      ]
  );
  const setProductStatus = (s) => {
    status.some(item => item.status ===s ? setData(item) : null)
    }


  useEffect(() => {
    setProductStatus(params.status)
  }, [params.status])

  return (
        <div style={{color: data.color, fontWeight: '600',textAlign: 'center'}}>
          {data.status}
          </div>
  )

}


export default ProductStatus