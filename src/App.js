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
            <Route exact path="/" component={Home} />
            <Route path="/bills" component={Bills} />
            <Route path="/invoices" component={Invoices} />
            <Route path="/settings" component={Settings} />
            <Route path="/payment" component={Payments} />
            <Route path="/items" component={Items} />
            <Route path="/report" component={Reports} />
          </Switch>
        </div>
        <AppBottomNav />
      </Provider>
    </div >
  );
}

export default App;
