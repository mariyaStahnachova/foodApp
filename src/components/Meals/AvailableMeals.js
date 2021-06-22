import React from 'react';
import css from './AvailableMeals.module.css'
import Card from "../UI/Card/Card";
import MealItem from "./MealUtem/MealItem";
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {return <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description} />})
    return (
        <Card>
       <section className={css.meals}>
           <ul>
               {mealsList}
           </ul>
       </section>
        </Card>
    );
};

export default AvailableMeals;