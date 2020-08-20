import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/header/header';
import ListLayoutContainer from './components/story-layouts/list-layout/list-layout-container';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Switch>
        {/* <Route path="/" component={RichLayoutWrapper} /> */}
        <Route path="/search" component={ListLayoutContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
