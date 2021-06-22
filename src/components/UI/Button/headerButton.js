import React from 'react';
import Card from '../../Cart/CartIcon'
import css from './Buttom.module.css'

const HeaderButton = (props) => {
    return (
        <button className={css.button}>
            <span className={css.icon}><Card/></span>
            <span>Your Cart</span>
            <span className={css.badge}>3</span>

        </button>
    );
};

export default HeaderButton;