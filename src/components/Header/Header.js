import React from 'react';

const navItems = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];
const keys = [1,2,3,4,5];

export const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__logo">
        <img src="../../images/logo.svg" className="header__image" alt="Test task logo"></img>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {navItems.map((item, index)=> {
            return (
            <li className="header__nav-item">
              <a
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="link header__nav-link"
                key={keys[index]}
              >
                {item}
              </a>
            </li>
            )
          })}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
