import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
  const [product, setProduct] = useState()
  const {productId }= useParams()

  const getSingleProduct = async ()=>{
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await res.json()
      setProduct(data)
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    getSingleProduct()
  },[])

  return (
    <div style={{
      background: "black",
      color: "white",
      padding: "2rem"
    }}>
      <img src={product?.image} alt="" width={400} />
      <h1>{product?.title}</h1>
      <p>${product?.price}</p>
    </div>
  )
}

export default SingleProduct