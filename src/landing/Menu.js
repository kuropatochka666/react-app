import React from 'react';
import img from '../img/face.jpg'


export default function MenuF(){
  
    return(
      <div className="menu">
          <div className="menu__top">
            <div className="menu__top__topic">Лиды</div>
            <div className="menu__top__search"><input className="menu__top__search__text" type="search" name="menu__top__search-input" placeholder="Поиск по лидам"/> <i className="menu__top__search__icon fas fa-search fa-lg"></i></div>
            <div className="menu__top__button"><span className="menu__top__button__text">Создать лид</span> </div>
          </div>
          <div className="menu__bottom">
              <div className="menu__bottom__category">
                <div className="menu__bottom__category__all "> Все</div>
                <div className="menu__bottom__category__all "> Категория А</div>
                <div className="menu__bottom__category__all "> Категория В</div>
                <div className="menu__bottom__category__all "> Категория С</div>
                <div className="menu__bottom__category__all "> Источник обращения<span className="menu__bottom__category__arrow"></span> </div>
              </div>
              <div className="menu__bottom__date">
                  <div className="menu__bottom__date_all">Сегодня</div>
                  <div className="menu__bottom__date_all">Неделя</div>
                  <div className="menu__bottom__date_all">Месяц</div>
                  <div className="menu__bottom__date_all"><img className="menu__bottom__date__icon" src={ img } alt=" "/>11.07.2018 - 16.10.2018 <span className="menu__bottom__date_arrow"></span> </div>
              </div>
        </div>
      </div>
    );
}