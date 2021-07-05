import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

import { NAVIGATION_LINKS } from '../../variables/variables';

import './Navigation.scss';

type NavigationProps = {
  isOpen: boolean;
  onToggleMenu: (e: React.MouseEvent<Element>) => void;
};

export default function Navigation({ isOpen, onToggleMenu }: NavigationProps): JSX.Element {
  return (
    <nav className={`nav-wrapper ${isOpen ? 'open' : 'close'}`}>
      <ul className="nav">
        {NAVIGATION_LINKS.map(({ text, path }) => (
          <NavigationLink text={text} path={path} key={path} />
        ))}
      </ul>
      <div
        className="close-menu"
        onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
        aria-hidden="true"
      >
        <img className="close-menu-icon" src="./images/icons/close-menu.svg" alt="close menu" />
      </div>
      <button type="button" className="btn__login">
        Login
      </button>
    </nav>
  );
}
