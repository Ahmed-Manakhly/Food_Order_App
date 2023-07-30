import Classes from './MealItem.module.css' ;
import MealItemForm from './MealItemForm'
//----------------------------------
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import React from 'react';
//------------------------


const MealItem = props => {
    const cartCtx = useContext(CartContext) ;
    //------------------------------
    const price = `$${props.price.toFixed(2)}`
    //----------------------------
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id : props.id ,
            name : props.name ,
            amount : amount ,
            price : props.price ,
            img : props.img
        })
    } ;
    //------------------------------

    return <li className={Classes.meal}>
        <div className={Classes.info}><h3>{props.name}</h3> <div className={Classes.description}>{props.description}</div> <div className={Classes.price}>{price}</div></div>
        <div className={Classes.img}><img src={props.img} alt="mealImg" /></div>
        <div> <MealItemForm onAddToCart={addToCartHandler} id={props.id} /> </div>
    </li>
} ;
export default MealItem ;