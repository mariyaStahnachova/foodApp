import React, {Fragment} from 'react';
import meal from '../../assets/meals.jpg'
import css from './header.module.css'
import HeaderButton from "../UI/Button/headerButton";
const Header = () => {
    return (
      <Fragment>
          <header className={css.header}>
              <h1>ReactMeals</h1>
              <HeaderButton> </HeaderButton>
          </header>
          <div className={css['main-image']}>
            <img src={meal}  alt="table with delicious food" />
          </div>
      </Fragment>

    );
};

export default Header;