import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
/* import { Route, Switch, Redirect, withRouter ,NavLink } from 'react-router-dom'; */
/* import { Clients } from '../Clietns/clients';
import { Home } from '../Home/home';
import { Price } from '../Price/price';
import { Works } from '../MyWorks/works';
import { Comments } from '../Comments/comments';
import { Contacts } from '../Contacts/contacts'; */
import style from './MainLayout.module.scss';


const imgSugar = '/icons/sugar.png';/* require('/icons/sugar.png') */
const authentication = '/icons/authentication.svg';/* require('/icons/authentication.svg'); */
const insta = '/icons/instagram.svg';/* require('/icons/instagram.svg'); */

export const MainLayout = ({children, title = ' Sugar'}) => {
    const [activeMenu,isActiveMenu] = useState(false);
    const clickBurger = () => {
        isActiveMenu(!activeMenu);
        document.body.classList.toggle('lock',!activeMenu);
    }
    return(
      <>
        <Head>
          <title>{title} | SugarPro Studio</title>
          <meta charSet='utf-8'/>
        </Head>
        <div className={style.wrapper}>
          <header className={style.sugarHeader}>
            <div className={style.container}>
                <div className={style.sugarHeader__body}>
                    <Link href="/">
                      <a className={style.sugarHeader__logo}>
                        <img src={imgSugar}/>
                        <span className={style.sugarHeader__start__brand}> SugarPro Studio</span>
                      </a>
                    </Link>
                    <div className={activeMenu ? [style.sugarHeader__burger,style.active].join('') : style.sugarHeader__burger} onClick={()=> clickBurger()}>
                        <span></span>
                    </div>
                    <nav className={activeMenu ? [style.sugarHeader__burger,style.active].join('') : style.sugarHeader__menu}>
                        <ul className={style.sugarHeader__list}>
                            <li className={style.sugarHeader_link}><Link href="/">О Студии</Link></li>
                            <li className={style.sugarHeader_link}><Link href="/price">Прайс</Link></li>
                            <li className={style.sugarHeader_link}><Link href="/works">Наши работы</Link></li>
                            <li className={style.sugarHeader_link}><Link href="/comments">Отзовы</Link></li>
                            <li className={style.sugarHeader_link}><Link href="/contacts">Контакты</Link></li>
                         </ul>
                    </nav>
                    <div className={style.sugarHeader__contacts}>
                        <div className={style.sugarHeader__contactsPhone}>
                            <strong>+7 (908) 828-43-17</strong>
                        </div>
                        {/* <div className={style.sugarHeader__contactsLinksSN}>
                            {<NavLink to="/">
                                <img src={insta}/>
                            </NavLink>}
                        </div> */}
                    </div>
                    <div className={style.sugarHeader__end}>
                      <a className="button" href="#">
                        <img src={authentication} alt="Авторизируйтесь"></img>
                      </a> 
                    </div>
                </div>
            </div>
        </header>
          <div className={style.content}>
            <div className={style.content_text}>
              {children}
            {/* <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/price'} component={Price} />
                <Route path={'/works'} component={Works} />
                <Route path={'/comments'} component={Comments} />
                <Route path={'/contacts'} component={Contacts} />
                <Redirect from='/' to='/'/>
            </Switch> */}
            </div>
          </div>
       </div>
      </>
    );
}

export default MainLayout;/* withRouter(Main) */