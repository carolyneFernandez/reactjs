import React from 'react';
import { getOneFilm } from '../../api.js';
import FilmPreview from "../../components/FilmPreview/FilmPreview";

class Film extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            releaseYear: '',
            description: '',
            similarFilms: [],
            isNotFound: false
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const slug = (match.params.slug);
        const film = getOneFilm(slug);

        if(film !== null) {
            this.setState({
                title: film.title,
                releaseYear: film.releaseYear,
                description: film.description,
                similarFilms: film.similarFilms
            });
        } else {
            this.setState({
                isNotFound: true
            });
        }
    }

    render(props) {
        const { title, releaseYear, description, isNotFound, similarFilms } = this.state;
        if (isNotFound === true) {
            return (<h1>Désolé, nous n'avons pas trouvé votre film...</h1>);
        }
        return (
            <section>
                <div>
                    <h1>{ title }</h1>
                    <p>{ releaseYear }</p>
                    <p>{ description }</p>
                </div>
                <div>
                    {similarFilms.map((film, i) => {
                        return (<FilmPreview key={i} releaseYear={film.releaseYear} title={film.title} slug={film.slug}/>);
                    })}
                </div>
                </section>
        );
    }
}

export default Film;