import React from 'react';
import ReactDom from 'react-dom';
import cls from '../Cart/Cart.module.css';
import classes from './Modal.module.css';


const Backdrop = (props) => {
  return (<div className={classes.backdrop} onClick={props.onClick}></div>);

};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
};

const  portalElement = document.getElementById('overlays');

const Modal = (props) => {

    console.log(props.itms);

   return(
    <React.Fragment>
      
        {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlays><ul className={cls['cart-Items']}>
     {
        props.itms.map((item) => {
             return (<li key={item.id}>{item.name}</li>);
       })
       }
   </ul>
   <div className={cls.total}>
        <span>Total</span>
        <span>35.65</span>
      </div>
      <div className={cls.actions}>
        <button className={cls['button--alt']} onClick={props.onClick}>Cancel</button>
        <button className={cls.button}>Order</button>
      </div></ModalOverlays>, portalElement)}
        
    </React.Fragment>);
};
export default Modal;
