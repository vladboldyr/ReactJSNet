import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from './MainLayout.module.scss';

const imgSugar = '/icons/sugar.png';
const authentication = '/icons/authentication.svg';
const insta = '/icons/instagram.svg';
const vk = '/icons/vk.svg';

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
        </Head>
        <div className={style.wrapper}>
          <header className={style.sugarHeader}>
            <div className={style.container}>
                <div className={style.sugarHeader__body}>
                    <Link href="/">
                      <a className={style.sugarHeader__logo}>
                        <img src={imgSugar}/>
                        <span className={style.sugarHeader__start__brand}>SugarPro Studio</span>
                      </a>
                    </Link>
                    <div 
                         className={activeMenu ? [style.sugarHeader__burger,style.active].join('') : style.sugarHeader__burger} 
                         onClick={()=> clickBurger()}
                      >
                        <span></span>
                    </div>
                    <nav className={activeMenu ? [style.sugarHeader__burger,style.active].join('') : style.sugarHeader__menu}>
                        <ul className={style.sugarHeader__list}>
                            <li><Link href="/">О Студии</Link></li>
                            <li><Link href="/price">Прайс</Link></li>
                            <li><Link href="/works">Наши работы</Link></li>
                            <li><Link href="/comments">Отзовы</Link></li>
                            <li><Link href="/contacts">Контакты</Link></li>
                         </ul>
                    </nav>
                    <div className={style.sugarHeader__contacts}>
                        <div className={style.sugarHeader__contactsPhone}>
                            <strong>+7 (908) 828-43-17</strong>
                        </div>
                        <div className={style.sugarHeader__contactsLinksSN}>
                            <Link href="https://www.instagram.com/lena_pushkina1/" passHref={true}>
                                <a className={style.sugarHeader__linkInsta} target="_blank"><img src={insta}/></a>
                            </Link>
                            <Link href="https://vk.com/id167021275" passHref={true}>
                                <a className={style.sugarHeader__linkInsta} target="_blank"><img src={vk}/></a>
                            </Link>
                        </div>
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
            </div>
          </div>
       </div>
      </>
    );
}

export default MainLayout;