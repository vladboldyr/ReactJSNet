import React from 'react';
import {NavLink} from 'react-router-dom';

import './main.css';

const imgSugar = require('../../icon/sugar.png');

export const Main = () => {
    return(
        <header className="sugar-header">
            <div className="wrapper sugar-header__wrapper">
                <div className="sugar-header__start">
                    <img style = {{width:'45px',height:'45px'}} src = {imgSugar}/>
                    <a href="#" className="brand">
                        SugarPro
                        Studio
                    </a>
                </div>
                <div className="sugar-header__middle">
                    <nav className="nav navCustom">
                        <button className="nav__toggle" aria-expanded="false" type="button">
                            Меню
                        </button>
                        <ul className="nav__wrapper">
                            <li className="nav__item"><NavLink to="/" exact>О нас</NavLink></li>
                            <li className="nav__item"><NavLink to="/price">Прайс</NavLink></li>
                            <li className="nav__item"><NavLink to="/works">Наши работы</NavLink></li>
                            <li className="nav__item"><NavLink to="/contacts">Контакты</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="sugar-header__end">
                    <a className="button" href="#">Sign in</a>
                </div>
            </div>
        </header>
       
    );
}