
import React from "react";
import HeaderCartButton from "./HeaderCartButton";


import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';




const Header =(props)=>{

    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>My FOOD </h1>
               <HeaderCartButton onClick={props.onShowCard}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food"/>
            </div>
        </React.Fragment>
    )

}
export default Header;