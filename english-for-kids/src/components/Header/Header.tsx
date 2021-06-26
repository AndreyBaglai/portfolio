import React from 'react';

import openMenu from '../../assets/icons/open-menu.svg';
import toggle from '../../assets/icons/toggle.svg';

import './Header.scss';

export default function Header() {
  return (
    <header className="header container">
      <div className="open-menu">
        <img src={openMenu} alt="Open menu" />
      </div>

      <div className="checkbox">
        <label className="checkbox__container" htmlFor="toggle">
          <input className="checkbox__toggle" type="checkbox" id="toggle" />
          <span className="checkbox__checker"></span>
          <span className="checkbox__txt-left">Train</span>
          <span className="checkbox__txt-right">Play</span>
          <svg
            className="checkbox__bg"
            // space="preserve"
            // version="1.1"
            // viewbox="0 0 110 43.76"
          >
            <path
              className="shape"
              d="M88.256,43.76c12.188,0,21.88-9.796,21.88-21.88S100.247,0,88.256,0c-15.745,0-20.67,12.281-33.257,12.281,S38.16,0,21.731,0C9.622,0-0.149,9.796-0.149,21.88s9.672,21.88,21.88,21.88c17.519,0,20.67-13.384,33.263-13.384,S72.784,43.76,88.256,43.76z"
            ></path>
          </svg>
        </label>
      </div>
    </header>
  );
}
