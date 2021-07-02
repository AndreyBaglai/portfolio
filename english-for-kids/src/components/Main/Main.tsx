import { Route, Switch } from 'react-router-dom';
import React from 'react';
import CardsField from '../CardsField/CardsField';
import CategoriesField from '../CategoriesField/CategoriesField';

import './Main.scss';
import Statistics from '../Statistics/Statistics';
import { LocalStorageItem } from '../../models/localStorageItem';

type MainProps = {
  isGameMode: boolean;
  baseStatistics: LocalStorageItem[];
};

export default function Main({ isGameMode, baseStatistics }: MainProps) {
  return (
    <main className="main container">
      <Switch>
        <Route path="/" exact component={CategoriesField} />
        <Route
          path="/action-a"
          component={() => <CardsField typeCards="action-a" isGameMode={isGameMode} />}
        />
        <Route
          path="/action-b"
          component={() => <CardsField typeCards="action-b" isGameMode={isGameMode} />}
        />
        <Route
          path="/animal-a"
          component={() => <CardsField typeCards="animal-a" isGameMode={isGameMode} />}
        />
        <Route
          path="/animal-b"
          component={() => <CardsField typeCards="animal-b" isGameMode={isGameMode} />}
        />
        <Route
          path="/clothes"
          component={() => <CardsField typeCards="clothes" isGameMode={isGameMode} />}
        />
        <Route
          path="/emotions"
          component={() => <CardsField typeCards="emotions" isGameMode={isGameMode} />}
        />
        <Route
          path="/trees"
          component={() => <CardsField typeCards="trees" isGameMode={isGameMode} />}
        />
        <Route
          path="/sport"
          component={() => <CardsField typeCards="sport" isGameMode={isGameMode} />}
        />
        <Route
          path="/statistics"
          component={() => <Statistics baseStatistics={baseStatistics} />}
        />
      </Switch>
    </main>
  );
}
