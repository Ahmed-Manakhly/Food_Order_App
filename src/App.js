
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart' ;
import { useState } from 'react';
import CartProvider  from './Store/CartProvider';
import React from 'react';

function App() {

  const [cartIsShown , setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true) ;
  }
  
  const hideCartHandler = ()=>{
    setCartIsShown(false) ;
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
};

export default App;
