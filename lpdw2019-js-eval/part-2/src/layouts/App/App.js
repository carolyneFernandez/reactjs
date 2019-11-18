import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  return (
    <Router>
      <AppHeader />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
