import React ,{useContext}from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=(props)=>{
    const cartCtx= useContext(CartContext);

    const CartList = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber +item.amount;

    },0);
    return(
       <button className={classes.button} onClick ={props.onClick}>
            <span className={classes.icon}>
               <CartIcon/>
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
               {CartList}
            </span>
        </button>
    )

};
export default HeaderCartButton;