import React, { useContext } from 'react'
import { authContext } from '../src/contexts/AuthContext'
import { productContext } from '../src/contexts/ProductContext'



const LandingPage = () => {

  const {user, signUp, login} = useContext(authContext);
  const {products, fetchProducts} = useContext(productContext)
  return (
    <div>
      <h1>This is the landing page</h1>
      <button onClick={signUp}>Signup</button>
      <button onClick={login} style={{
        marginLeft: "2em"
      }}> Login </button>
      <button onClick={fetchProducts} style={{
        marginLeft: "2em"
      }}> Fetch Products </button>
    </div>
  )
}

export default LandingPage
