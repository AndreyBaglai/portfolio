import { Route, Switch } from 'react-router-dom';
import React from 'react';
import CardsField from '../CardsField/CardsField';
import CategoriesField from '../CategoriesField/CategoriesField';

import './Main.scss';

export default function Main() {
  return (
    <main className="main container">
      <Switch>
        <Route path="/" exact component={CategoriesField} />
        <Route path="/action-a" component={() => <CardsField typeCards="action-a" />} />
        <Route path="/action-b" component={() => <CardsField typeCards="action-b" />} />
        <Route path="/animal-a" component={() => <CardsField typeCards="animal-a" />} />
        <Route path="/animal-b" component={() => <CardsField typeCards="animal-b" />} />
        <Route path="/clothes" component={() => <CardsField typeCards="clothes" />} />
        <Route path="/emotions" component={() => <CardsField typeCards="emotions" />} />
      </Switch>
    </main>
  );
}
