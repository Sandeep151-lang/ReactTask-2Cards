import { useState } from 'react'
import './App.css';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Footers from './components/Footers';
import Headers from './components/Headers';
import Navsection from './components/Navsection';
import CardsSection from './components/CardsSection';




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
        <Navsection cartItemlength={cartItems.length} cartItems={cartItems} onRemove={onRemove}/>
        <Headers />
        <CardsSection products={products} cartItems={cartItems} onAdd={onAdd}/>
        <Footers />
      </Router>
    </>
  );
}

export default App;
