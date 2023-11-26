import './App.scss';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Main from '../Components/Main/Main.js'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Components/Cart/Cart.js';
import AboutUS from "../Components/AboutUs/AboutUs.js"
import React from 'react';
import { fakeFetch } from '../helpers/items.js';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
	React.useEffect(()=>{
		const handleFakeFetch = async () => {
			const items = await fakeFetch();
			setItems(items);
		}
		handleFakeFetch();
	})
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Main items={items} cartItems={cartItems} setCartItems={setCartItems}/>}/>
            <Route path="/cart" element={<Cart items={items} cartItems={cartItems} setCartItems={setCartItems}/>}/>
            <Route path="/about" element={<AboutUS></AboutUS>}></Route>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
