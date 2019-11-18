import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="AppHeader">
        <h1>LPDW Films</h1>
        <nav>
          <NavLink to="/" exact activeClassName="active">Tous les films</NavLink>
        </nav>
      </header>
    );
  }
}
