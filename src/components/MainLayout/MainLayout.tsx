import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayout.scss';

const imgSugar = '/icons/sugar.png';
const authentication = '/icons/authentication.svg';
const insta = '/icons/instagram.svg';
const vk = '/icons/vk.svg';

interface IProps {
  children: ReactNode;
}
export const MainLayout = ({children}:IProps/* {children, title = ' Sugar'} */) => {
    const [activeMenu,isActiveMenu] = useState(false);
    const clickBurger = () => {
        isActiveMenu(!activeMenu);
        document.body.classList.toggle('lock',!activeMenu);
    }
    return(
      <>
        {/* <Head>
          <title>{title} | SugarPro Studio</title>
        </Head> */}
        <div className="wrapper">
          <header className="sugarHeader">
            <div className="container">
                <div className="sugarHeader__body">
                    <NavLink to="/" className="sugarHeader__logo">
                        <img src={imgSugar}/>
                        <span className="sugarHeader__start__brand">SugarPro Studio</span>
                    </NavLink>
                    <div 
                         className={activeMenu ? "sugarHeader__burger active" : "sugarHeader__burger"} 
                         onClick={()=> clickBurger()}
                      >
                        <span></span>
                    </div>
                    <nav className={activeMenu ? "sugarHeader__burger active" : "sugarHeader__menu"}>
                        <ul className="sugarHeader__list">
                            <li><NavLink to="/">О Студии</NavLink></li>
                            <li><NavLink to="/price">Прайс</NavLink></li>
                            <li><NavLink to="/works">Наши работы</NavLink></li>
                            <li><NavLink to="/comments">Отзовы</NavLink></li>
                            <li><NavLink to="/contacts">Контакты</NavLink></li>
                         </ul>
                    </nav>
                    <div className="sugarHeader__contacts">
                        <div className="sugarHeader__contactsPhone">
                            <strong>+7 (908) 828-43-17</strong>
                        </div>
                        <div className="sugarHeader__contactsLinksSN">
                                <a href="https://www.instagram.com/lena_pushkina1/" className="sugarHeader__linkInsta" target="_blank"><img src={insta}/></a>
                                <a href="https://vk.com/id167021275" className="sugarHeader__linkInsta" target="_blank"><img src={vk}/></a>
                        </div>
                    </div>
                    <div className="sugarHeader__end">
                      <a className="button" href="#">
                        <img src={authentication} alt="Авторизируйтесь"></img>
                      </a> 
                    </div>
                </div>
            </div>
        </header>
          <div className="content">
            <div className="content_text">
              {children}
            </div>
          </div>
       </div>
      </>
    );
}

export default MainLayout;