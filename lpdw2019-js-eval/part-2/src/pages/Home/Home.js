import React from 'react';
import Feed from '../../components/Feed/Feed';
import {getAllFilms} from "../../api.js";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        };
    }

    componentDidMount() {
        const films = getAllFilms();
        this.setState({
            films: films
        })
    }

    render() {
        const {films} = this.state;
        return (
            <section>
                <h1>Liste des films</h1>
                <Feed films={films}/>
            </section>
        )
    }
}

export default Home;