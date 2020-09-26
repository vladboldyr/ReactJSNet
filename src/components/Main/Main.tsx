import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter ,NavLink } from 'react-router-dom';
import { Clients } from '../Clietns/clients';
import { Home } from '../Home/home';
import { Price } from '../Price/price';
import { Works } from '../MyWorks/works';
import { Comments } from '../Comments/comments';
import { Contacts } from '../Contacts/contacts';
import './main.less';

const imgSugar = require('../../icons/sugar.png');
const authentication = require('../../icons/authentication.svg');

export const Main = () => {
    const [activeMenu,isActiveMenu] = useState(false);
    const clickBurger = () => {
        isActiveMenu(!activeMenu);
        document.body.classList.toggle('lock',!activeMenu);
    }
    return(
        <div className="wrapper">
          <header className="sugar-header">
            <div className="container">
                <div className="sugar-header__body">
                    <NavLink to="/" className="sugar-header__logo">
                        <img src={imgSugar}/>
                        <span className="sugar-header__start__brand"> SugarPro Studio</span>
                    </NavLink>
                    <div className={activeMenu ? "sugar-header__burger active":"sugar-header__burger"} onClick={()=> clickBurger()}>
                        <span></span>
                    </div>
                    <nav className={activeMenu ? "sugar-header__menu active" : "sugar-header__menu"}>
                        <ul className="sugar-header__list">
                            <li className="sugar-header__link"><NavLink to="/" exact>О Студии</NavLink></li>
                            <li className="sugar-header__link"><NavLink to="/price">Прайс</NavLink></li>
                            <li className="sugar-header__link"><NavLink to="/works">Наши работы</NavLink></li>
                            <li className="sugar-header__link"><NavLink to="/comments">Отзовы</NavLink></li>
                            <li className="sugar-header__link"><NavLink to="/contacts">Контакты</NavLink></li>
                         </ul>
                    </nav>
                    <div className="sugar-header__end">
                      <a className="button" href="#">
                        <img src={authentication} alt="Авторизируйтесь"></img>
                      </a> 
                    </div>
                </div>
            </div>
        </header>
          <div className="content">
            <div className="content_text">
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/price'} component={Price} />
                <Route path={'/works'} component={Works} />
                <Route path={'/comments'} component={Comments} />
                <Route path={'/contacts'} component={Contacts} />
                <Redirect from='/' to='/'/>
            </Switch>
            </div>
          </div>
       </div>
    );
}

export default withRouter(Main)