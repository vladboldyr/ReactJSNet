import React from 'react';
import {NavLink} from 'react-router-dom';
import './home.less';

const imgHome = require('../../../public/image/img_home.jpg');
export const Home = () => {
    return(
        <div className="wrapper-home">
          <div className="wrapper-img"><img src={imgHome}/></div>
            <div className="content-home">
              <div className="content-home__discription">
                <p>
                  История Заи началась в 2018 году с частной практики шугаринга и твердых принципов, предоставлять клиентам услуги самого высокого качества за разумные деньги. За несколько лет были разработаны и введены в работу новые техники, которые позволили быстро и максимально безболезненно проводить процедуру сахарной эпиляции, что бы создать максимальный комфорт не только для клиента, но и мастера.
                </p>
                <p>
                  История Заи началась в 2018 году с частной практики шугаринга и твердых принципов, предоставлять клиентам услуги самого высокого качества за разумные деньги. За несколько лет были разработаны и введены в работу новые техники, которые позволили быстро и максимально безболезненно проводить процедуру сахарной эпиляции, что бы создать максимальный комфорт не только для клиента, но и мастера.
                </p>
                <div className="link-works">
                  <NavLink className="link-works__button link-works__text" to='/works'>Мои работы</NavLink>
                </div>
              </div>
            </div>
      </div>
    );
}