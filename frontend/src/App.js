import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";


import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CheckoutSuccess from "./components/CheckoutSuccess";
import ProductsList from "./components/admin/list/ProductsList";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Product from "./components/Details/Product";
import Order from "./components/Details/Order";
import UserProfile from "./components/Details/UserProfile";

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
          <Route path="/product/:id" exact element={<Product />}></Route>
          <Route path="/order/:id" exact element={<Order />}></Route>
          <Route path="/user/:id" exact element={<UserProfile />}></Route>
          <Route path="/admin" exact element={<Dashboard />}>
            <Route path="products" exact element={<Products />}>
              <Route index element={<ProductsList/>}/>
            <Route path="create-product" exact element={<CreateProduct />}></Route>
            </Route>
            <Route path="summary" exact element={<Summary />}/>
            <Route path="users" exact element={<Users />}/>
            <Route path="orders" exact element={<Orders />}/>
          </Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
