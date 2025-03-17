import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
  const [products, setproducts] = useState([])

const baseUrl = "https://fakestoreapi.com"

const getProducts = async () =>{
  try {
    const res = await fetch(`${baseUrl}/products`)
    const data = await res.json()
    setproducts(data)
  } catch (error) {
    console.error(error)
  }finally{
    console.log('done!!!'); 
  }
}
useEffect(()=>{
  getProducts()
}, [])

  return (
    <div>
    <h2 style={{
      textAlign: "center",
    }}>Welcome our Product Dashboard</h2>
    <section style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)"
    }}>
       {
        products.map(product =>(
          <Link to={`/products/${product.id}`} key={product.id} style={{
            padding: "1rem",
            border: "1px solid",
            margin: "1rem"
          }}>
            <div style={{height:"200px"}}>
              <img src={product.image} alt="" style={{width:"100%", height:"100%", objectFit: "contain"}} />
            </div>
            <h1>{product.title}</h1>
          </Link>
        ))
      }
    </section>
  </div>
  )
}

export default Dashboard
