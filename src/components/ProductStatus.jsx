import {useEffect, useState} from "react";

const ProductStatus = (params) => {
  const [data, setData] = useState("");

  const setProductStatus = (s) =>{
    switch (s) {
      case "AVAILABLE" :
        setData("test available")
        break;
      case "HIRING":
        setData("test hiring")
        break;
    }
  }
  useEffect(() => {
    setProductStatus(params.status)
  })

  return (<>
        {data}
      </>

  )
}


export default ProductStatus