import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pathNames from './utils/pathNames'
import Login from './pages/Login';
import MainPage from './pages/MainPage';
// import Latest from './pages/Latest';
// import Trending from './pages/Trending';
// import Popular from './pages/Popular';
// import TopRated from './pages/TopRated';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ pathNames.start } exact component={ MainPage } />
        <Route path={ pathNames.login } exact component={ Login } />
        {/* <Route path={ pathNames.trending } exact component={ Trending } />
        <Route path={ pathNames.popular } exact component={ Popular } />
        <Route path={ pathNames.topRated } exact component={ TopRated } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
