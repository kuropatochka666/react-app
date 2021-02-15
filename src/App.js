import React from 'react';
import HeaderF from './landing/header.js';
import NavBar  from './landing/NavBar.js';
import MenuF from './landing/Menu.js';
import Content from './landing/content.js';
import Container  from './landing/modal.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/style.css';


function App() {
  const todos = [
    {id:1, completed:false, title:'Аксёнов Антон Александрович', contacts: '+7 904 847 36 18', source:'Контекстная реклама', cause:'Головные боли, насморк, необходима консультация терапевта или лора', category:'A'},
    {id:2, completed:false, title:'Иванов Иван Иванович', contacts: '+7 904 847 36 18', source:'Сайт', cause:'Головные боли, насморк, необходима консультация терапевта или лора', category:'A'},
    {id:3, completed:false, title:'Иванов Антон Викторович', contacts: '+7 999 847 36 18', source:'Рекомендация', cause:'Головные боли, насморк, необходима консультация терапевта или лора', category:'B'},
    {id:4, completed:false, title:'Гастронов Илья Муромич', contacts: '+7 922 847 36 18', source:'POS материалы', cause:'Головные боли, насморк, необходима консультация терапевта или лора', category:'C'},
    {id:5, completed:false, title:'Лобанов Тимур Альбертович', contacts: '+7 933 847 36 18', source:'E-mail маркетинг', cause:'Головные боли, насморк, необходима консультация терапевта или лора', category:'A'}

  ]
 

  return (
    <div>
    <div className="header__shadow">
      <div className="header--container">
        <HeaderF/>
      </div>
     
    </div>
    
    <div className="main-container">
      <NavBar/>
      <div>
      <MenuF/>
      <Content todos={todos} />
      
      <Container/>
 
      </div>
    </div>
   
    </div>

  );
}

export default App;
 