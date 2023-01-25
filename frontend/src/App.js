import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route
            path="/checkout-success"
            exact
            element={<CheckoutSuccess />}
          ></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/admin" exact element={<Dashboard />}>
            <Route path="products" exact element={<Products />}>
              <Route
                path="create-product"
                exact
                element={<CreateProduct />}
              ></Route>
            </Route>
            <Route path="summary" exact element={<Summary />}></Route>
          </Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


