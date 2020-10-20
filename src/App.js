import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { AppHeader, AppBottomNav } from './components/common';
import { Bills, Home, Invoices, Settings, Items, Reports, Payments } from './screens';

import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="fixed-top">
          <AppHeader />
        </div>
        <div className="mt-8">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bills">
              <Bills />
            </Route>
            <Route path="/invoices">
              <Invoices />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/payment">
              <Payments />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/report">
              <Reports />
            </Route>
          </Switch>
        </div>
        <AppBottomNav />
      </Provider>
    </div>
  );
}

export default App;
