import React from 'react';

const NavBar = () => (
    <nav className="nav-bar">
      <ul className="list">
        <li className="item -active"><span>Задачи</span></li>
        <li className="item"><a>Проекты</a></li>
        <li className="item"><a>Статистика</a></li>
        <li className="item"><a className="nav-button">Новая задача <i className="material-icons">&#xE148;</i></a></li>

      </ul>
    </nav>
);

export default NavBar;
