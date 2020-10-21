import React from 'react';
import Link from 'next/link';
import style from './home.module.scss';

const imgHome = '/image/img_main.jpg';
export default function Home() {
    return(
        <div className={style.wrapperHome}>
          <div className={style.wrapperImg}><img src={imgHome}/></div>
            <div className={style.contentHome}>
              <div className={style.contentHome__discription}>
                <p>
                  История Заи началась в 2018 году с частной практики шугаринга и твердых принципов, предоставлять клиентам услуги самого высокого качества за разумные деньги. За несколько лет были разработаны и введены в работу новые техники, которые позволили быстро и максимально безболезненно проводить процедуру сахарной эпиляции, что бы создать максимальный комфорт не только для клиента, но и мастера.
                </p>
                <p>
                  История Заи началась в 2018 году с частной практики шугаринга и твердых принципов, предоставлять клиентам услуги самого высокого качества за разумные деньги. За несколько лет были разработаны и введены в работу новые техники, которые позволили быстро и максимально безболезненно проводить процедуру сахарной эпиляции, что бы создать максимальный комфорт не только для клиента, но и мастера.
                </p>
                <div className={style.linkWorks}>
                  <Link href='/works'>
                    <a className={[style.linkWorks__button, style.linkWorks__text].join('')}>Мои работы</a>
                  </Link>
                </div>
              </div>
            </div>
      </div>
    );
}