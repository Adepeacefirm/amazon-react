import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
// import Contact from "../pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import AddPost from "../pages/AddPost";
import { Toaster } from "sonner";
import AuthProvider from "./contexts/AuthContext";
import ProductProvider, { productContext } from "./contexts/ProductContext";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import VerifyAccount from "../pages/VerifyAccount";
import ProtectedRoute from "./components/ProtectedRoutes";
import Dashboard from "../pages/private/Dashboard";
import AddProduct from "../pages/private/AddProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <Navbar />
            <Toaster
              richColors
              visibleToasts={1}
              position="top-right"
              closeButton
            />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFound />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<SingleProduct />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify/:token" element={<VerifyAccount />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-product" element={<AddProduct />} />
              </Route>
            </Routes>
            <Footer />
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
