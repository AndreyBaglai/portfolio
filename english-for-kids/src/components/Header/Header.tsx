import React from 'react';

import Toggle from '../Toggle/Toggle';
import openMenuSVG from '../../assets/icons/open-menu.svg';

import './Header.scss';

type HeaderProps = {
  onToggleMenu: (e: React.MouseEvent<Element>) => void;
  onToggleGameMode: () => void;
};

export default function Header({ onToggleMenu, onToggleGameMode }: HeaderProps): JSX.Element {
  return (
    <header className="header container">
      <div
        className="open-menu"
        onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
        aria-hidden="true"
      >
        <img className="open-menu-icon" src={openMenuSVG} alt="Open menu" />
      </div>

      <Toggle onToggleGameMode={onToggleGameMode} />
    </header>
  );
}
