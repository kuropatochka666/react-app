import React from 'react';


export default function HeaderF(){

    return(
                <div className="header">
                    <div className="header__logo"></div>
                    <div className="header__search"><input  className="header__seacrh__text" type="search" placeholder="Поиск"/></div>
                    <div className="header__date">
                        <ul className="header__date__list">
                            <li className="header__date__list--text1">Вторник</li>
                            <li className="header__date__list--text2">7 Августа, 2018</li>
                        </ul>
                    </div>
                    <div className="header__bell"><i className="far fa-bell fa-lg"></i></div>
                    <div className="header__image"></div>   
                    <div className="header__username">Ивенкина Мария</div>
                    <div className="header__arrow"> </div>
                </div>


    );
}