import React from 'react';
import { getAllFilms } from '../../api';
import Films from '../../components/films';
export default class Home extends React.Component {
  constructor(props){

    
  }
  render() {
    const films=getAllFilms();

    return (
      <div>
        <h1>Tous nos films</h1>
        <section>
          <Films posts={films}></Films>
               
        </section>
      </div>
    );
  }
}
