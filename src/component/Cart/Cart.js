import React from 'react'
import Modal from '../UI/Modal'


const Cart = (props) => {
  const CartItems=[{ id: 'c1', name: 'Pizza', amount: 2, price: 300 }];
  // const cartItems = (
  // <ul className={classes['cart-Items']}>
  //     {
  //       [{ id: 'c1', name: 'Pizza', amount: 2, price: 300 }].map((item) => {
  //           return (<li key={item.id}>{item.name}</li>);
  //       })
  //     }
  // </ul>
  // );

  console.log(CartItems);
  return (
    <Modal itms = {CartItems} onClick={props.onCloseCard}>
        
      {/* {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.65</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div> */}
    </Modal>
  );
  
};

export default Cart;
