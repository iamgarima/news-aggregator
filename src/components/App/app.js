import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import ListLayoutContainer from '../Story-layouts/List-layout';
import Home from '../Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/search" component={ListLayoutContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
