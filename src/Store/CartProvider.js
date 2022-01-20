import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const CartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState
}

const CartProvider = (props) => {
    // console.log(props.children);

console.log(<CartContext.Provider value={CartContext}>
    {props.children}
  </CartContext.Provider>);
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState,
  )

  const addCartItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeCartItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  }

  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  )
 
}

console.log(CartContext );
export default CartProvider
