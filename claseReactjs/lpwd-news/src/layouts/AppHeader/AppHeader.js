import React from 'react';
import {NavLink} from 'react-router-dom';
import './AppHeader.css';
export default class AppHeader extends React.Component{
    render(){
        return(
            <header className='AppHeader'>
                <h1>LPDW NEWS</h1>
                <nav>
                    <NavLink to='/' activeClassName="active" exact>Home</NavLink>
                    <NavLink to='/about' activeClassName="active" exact>About</NavLink>
                    <NavLink to='/best-posts' activeClassName="active" exact>Best Post</NavLink>
                    <NavLink to='/profile' activeClassName="active" exact>Profile</NavLink>
                </nav>
            </header>
        )
    }
}