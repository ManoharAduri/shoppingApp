import './App.css';
import React,{useState} from 'react'
import Header from './containers/Header';
import {Routes,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart/Cart';
import Register from './containers/Register';
import Login from './containers/Login';

function App() {
  const [cartIsOpen,setCartIsOpen] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')
  const cartOpenHandler = () =>{
    setCartIsOpen(true)
  }

  const cartCloseHandler = () =>{
    setCartIsOpen(false)
  }
  return (
    <div className="App">
      <Header onOpen={cartOpenHandler} onProductSearch={(value)=>setSearchTerm(value)}/>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<ProductListing searchTerm={searchTerm}/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        </Routes>
        {cartIsOpen && <Cart onClose={cartCloseHandler} />}

    </div>
  );
}

export default App;
