import React from 'react';
import './Menu.css';

const Menu: React.FC = () => (
  <div className="menu">
    <h2>Menu</h2>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

    <button>log out</button>
  </div>
);

export default Menu;
