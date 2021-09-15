import { useState } from 'react'
import './App.css';
import data from './components/data';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Heading from './components/Heading';
import Footer from './components/Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";



const App = () => {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  // Add function to add card in the cart
  const onAdd = (product) => {
    setCartItems([...cartItems, product])
  }

  //Remove function to remove card from the cart 
  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id))
  }
  return (
    <>
      <Router>
        <Navbar cartItemlength={cartItems.length} cartItems={cartItems} onRemove={onRemove} />
        <Heading />
        <Card products={products} cartItems={cartItems} onAdd={onAdd} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
