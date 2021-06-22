import React from 'react';
import css from './Mealitem.module.css'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={css.box}>
        <div className={css.meal}>
            <h3>{props.name} </h3>
            <div></div>
            <div className={css.description}>{props.description}</div>
            <div className={css.price}>{price}</div>
        </div>
        <div>
            <MealItemForm></MealItemForm>
        </div>
        </li>
    );
};

export default MealItem;