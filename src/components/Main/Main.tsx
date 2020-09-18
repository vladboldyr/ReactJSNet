import React from 'react';
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
                            <li className="nav__item"><a href="#">Home</a></li>
                            <li className="nav__item"><a href="#">Price</a></li>
                            <li className="nav__item"><a href="#">Works</a></li>
                            <li className="nav__item"><a href="#">Contacts</a></li>
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