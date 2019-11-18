import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Film from '../../pages/Film/Film';
import About from '../../pages/About/About';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  return (
    <Router>
      <AppHeader />

      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/film/:slug" exact component={ Film } />
          <Route path="/about" exact component={ About } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
