import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Congrats from "./components/pages/Congrats";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import ContactUS from "./components/pages/ContactUS";
import Product from "./components/pages/Product";
import ProductDetails from "./components/products/ProductDetails";
import Blog from "./components/pages/Blog";
import CheckOut from "./components/pages/CheckOut";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PageLayout from "./components/pagelayout/PageLayout";
function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Congrats" element={<Congrats />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/checkout" element={<CheckOut />} />
        
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
