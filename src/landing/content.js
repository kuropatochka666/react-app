import React from 'react';
import Item from "./content_items.js";
import Slider from './slider.js' 

export default function Content(props){

    return(

        <div className="content">
            <div className="content__head">
                <div className=" content__head--id">№</div>
                <div className=" content__head--leads">Лиды</div>
                <div className=" content__head--contacts">Контакты</div>
                <div className=" content__head--source">Источник обращения</div>
                <div className=" content__head--cause">Причина обращения</div>
                <div className=" content__head--category">Категория</div>

            </div>
            <div className="content__users">
                <ul>
                {props.todos.map((todo, index, colorCat)=>{
                    if (todo.category==='A') {
                        colorCat="content__users__item--6 content__users__categories--A"
                    }
                    if (todo.category==='B') {
                        colorCat="content__users__item--6 content__users__categories--B"
                    }
                    if (todo.category==='C') {
                        colorCat="content__users__item--6 content__users__categories--C"
                    }
                    return <Item todo={todo} key={todo.id} index={index} colorCat={colorCat}/>
                })}

                </ul>
            </div>
            <Slider />
        </div>

    );
}