import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [addingProduct, setAddingProduct] = useState(false);
  const token = localStorage.getItem("token");

  // add product
  const addProduct = async (formData) => {
    setAddingProduct(true);
    try {
      const res = await fetch(`${baseUrl}/products`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      setAddingProduct(true);
    } finally {
      setAddingProduct(false);
    }
  };

  const value = {
    addProduct,
    addingProduct,
    fetchProducts,
    products,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
