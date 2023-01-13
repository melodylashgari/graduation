import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
