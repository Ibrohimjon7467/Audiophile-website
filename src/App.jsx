import { useState, useEffect } from "react";

// firebase
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import { UserAuthContextProvider } from "./context/UserAuthContext"
// import ProtectedRoute from "./components/ProtectedRoute";

// pages
import Home from "./pages/page-home/Home";
import Category from "./pages/page-category/Category";
import Product from "./pages/page-product/Product";
import Form from "./pages/page-form/Form";

// rrd
import { BrowserRouter, Routes, Route } from "react-router-dom";

// database
import Data from "./data/data.json";

// components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// hooks
import useLocalStorage from "./hooks/useLocalStorage";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const [dataProduct, setDataProduct] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(1);

  const [quantityCartItem, setQuantityCartItem] = useLocalStorage("quantityCartItem", 0);
  const [productCart, setProductCart] = useLocalStorage("cartProducts", []);
  const [cartTotalPrice, setCartTotalPrice] = useLocalStorage("totalPrice", 0);

  useEffect(() => {
    setDataProduct(Data);
  }, []);

  return (
    <BrowserRouter>
      {/* <UserAuthContextProvider> */}
      <ScrollToTop />
      <Navbar
        productCart={productCart}
        setProductCart={setProductCart}
        quantityProduct={quantityProduct}
        quantityCartItem={quantityCartItem}
        setQuantityCartItem={setQuantityCartItem}
        cartTotalPrice={cartTotalPrice}
        setCartTotalPrice={setCartTotalPrice}
      />

      <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
          <Home dataProduct={dataProduct} />
          // </ProtectedRoute>
        } />

        <Route
          path="/:NameCategory"
          element={<Category dataProduct={dataProduct} />}
        />

        <Route
          path="/product/:SlugProduct"
          element={
            <Product
              dataProduct={dataProduct}
              quantityProduct={quantityProduct}
              setQuantityProduct={setQuantityProduct}
              productCart={productCart}
              setProductCart={setProductCart}
              quantityCartItem={quantityCartItem}
              setQuantityCartItem={setQuantityCartItem}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Form
              productCart={productCart}
              cartTotalPrice={cartTotalPrice}
              setQuantityCartItem={setQuantityCartItem}
              setProductCart={setProductCart}
              setCartTotalPrice={setCartTotalPrice}
            />
          }
        />
        {/* <Route path="/login" element={Login} />
          <Route path="/signup" element={Signup} /> */}
      </Routes>
      <Footer />
      {/* </UserAuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;