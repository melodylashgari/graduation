import './App.css';
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import  { ToastContainer } from "react-toastify"

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
