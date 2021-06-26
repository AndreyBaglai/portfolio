import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onToggleMenu = (e: React.MouseEvent<Element>) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('open-menu-icon') ||
      target.closest('.close-menu-icon') ||
      (!target.closest('.nav-wrapper') && isOpenMenu)
    ) {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  return (
    <div
      className="App"
      onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
      aria-hidden="true"
    >
      <Header onToggleMenu={onToggleMenu} />
      <Navigation isOpen={isOpenMenu} onToggleMenu={onToggleMenu} />
      <Main />
    </div>
  );
};

export default App;
