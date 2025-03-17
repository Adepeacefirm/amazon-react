import { useContext, useState } from "react";
import ProductProvider, { productContext } from "../../src/contexts/ProductContext";

const AddProduct = () => {
  const {addProduct, addingProduct} = useContext(productContext);
  const [formData, setFormData] = useState({
    name:"",
    description:"",
    price:""
  })

  const handleInput = (e)=>{
    const {name, value} = e.target
    setFormData(prev=>({...prev, [name]:value}))
 
  }

  const handleAddProduct = (e)=>{
    e.preventDefault()
    addProduct(formData)
  }



  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input type="text" placeholder="Product Name" id="name" name="name" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            placeholder="Product description"
            id="description"
            name="description"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Product price"
            id="price"
            name="price"
            onChange={handleInput}
          />
        </div>
        <button type="submit" disabled={addingProduct}>
            {
                addingProduct ? "Adding Product..." : "Add Product"
            }
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
