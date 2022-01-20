import React ,{useState}from 'react'
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals'
import Cart from './component/Cart/Cart'
import CartProvider from './Store/CartProvider'


function App() {
  const [isCardShown,setIsCardShown]=useState(false);

  const ShowCardHandler=()=>{
    setIsCardShown(true);
  }
  const HideCardHandler=()=>{
    setIsCardShown(false);
  }
  return (
    <CartProvider>
     {isCardShown && <Cart onCloseCard={HideCardHandler}/>}
      <Header  onShowCard={ShowCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App
