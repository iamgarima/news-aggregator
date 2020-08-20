import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import ListLayoutContainer from './components/story-layouts/list-layout';
import RichLayoutContainer from './components/story-layouts/rich-layout';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/search" component={ListLayoutContainer} />
        <Route path="/" component={RichLayoutContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
