import React from 'react';

export default function NavBar(){

    return(
        <div className="NavBar">

            <ul className="NavBar__nav">
                <li className="NavBar__nav--item1"><span>Склад</span></li>
                <li className="NavBar__nav--item2"><span>Услуги</span></li>
                <li className="NavBar__nav--item3"><span>Шаблоны</span></li>
                <li className="NavBar__nav--item4"><span>Фин. планы </span></li>
                <li className="NavBar__nav--item5"><span>Счета</span></li>
                <li className="NavBar__nav--item6"><span>Аналитика</span></li>
                <li className="NavBar__nav--item7"><span>Пациенты</span></li>
                <li className="NavBar__nav--item8"><span>Лиды</span></li>

            </ul>

        </div>
    );
}