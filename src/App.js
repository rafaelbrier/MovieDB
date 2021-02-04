import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pathNames from './utils/pathNames'
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import './App.css';
import DataProvider from './components/store/Provider';

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route path={ pathNames.start } exact component={ MainPage } />
          <Route path={ pathNames.login } exact component={ Login } />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
