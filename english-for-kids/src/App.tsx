import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import {
  getStatisticsFromLocalStorage,
  setStatisticsToLocalStorage,
} from './services/localStorage';

import { BASE_STATISTICS } from './variables/variables';

const App = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isGameMode, setIsGameMode] = useState(false);

  useEffect(() => {
    if (!getStatisticsFromLocalStorage()) {
      setStatisticsToLocalStorage(BASE_STATISTICS);
    }
  }, []);

  const onToggleMenu = (e: React.MouseEvent<Element>) => {
    const target = e.target as HTMLElement;

    if (
      target.classList.contains('open-menu-icon') ||
      target.closest('.nav-link') ||
      target.closest('.close-menu-icon') ||
      (!target.closest('.nav-wrapper') && isOpenMenu)
    ) {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  const onToggleGameMode = () => {
    setIsGameMode(!isGameMode);
  };

  return (
    <Router>
      <div
        className="App"
        onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
        aria-hidden="true"
      >
        <Header onToggleMenu={onToggleMenu} onToggleGameMode={onToggleGameMode} />
        <Navigation isOpen={isOpenMenu} onToggleMenu={onToggleMenu} />
        <Main isGameMode={isGameMode} baseStatistics={BASE_STATISTICS} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
