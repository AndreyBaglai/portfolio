import React from 'react';

import './Statistics.scss';

export default function Statistics() {
  return (
    <div className="statistics-wrapper">
      <div className="buttons-wrapper">
        {' '}
        <button type="button" className="btn">
          Repeat difficult words
        </button>
        <button type="button" className="btn">
          Reset
        </button>
      </div>

      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <div id="name" className="filter__link">
              Word
            </div>
          </div>
          <div className="header__item">
            <div id="wins" className="filter__link filter__link--number">
              Translation
            </div>
          </div>
          <div className="header__item">
            <div id="draws" className="filter__link filter__link--number">
              Category
            </div>
          </div>
          <div className="header__item">
            <div id="losses" className="filter__link filter__link--number">
              Clicks
            </div>
          </div>
          <div className="header__item">
            <div id="total" className="filter__link filter__link--number">
              Correct
            </div>
          </div>
          <div className="header__item">
            <div id="total" className="filter__link filter__link--number">
              Wrong
            </div>
          </div>
          <div className="header__item">
            <div id="total" className="filter__link filter__link--number">
              % Errors
            </div>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data">Cat</div>
            <div className="table-data">Кот</div>
            <div className="table-data">Animal (Set A)</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">5</div>
            <div className="table-data">5.01%</div>
          </div>
          <div className="table-row">
            <div className="table-data">Cat</div>
            <div className="table-data">Кот</div>
            <div className="table-data">Animal (Set A)</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">5</div>
            <div className="table-data">5.01%</div>
          </div>
          <div className="table-row">
            <div className="table-data">Cat</div>
            <div className="table-data">Кот</div>
            <div className="table-data">Animal (Set A)</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">5</div>
            <div className="table-data">5.01%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
