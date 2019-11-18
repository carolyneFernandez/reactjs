import React from 'react';
import FilmPreview from '../FilmPreview/FilmPreview.js';

class Feed extends React.Component {
    render() {
        const { films } = this.props;
        return (
            <section>
                {films.map((film, i) => {
                    return (<FilmPreview key={i} releaseYear={film.releaseYear} title={film.title} slug={film.slug}/>);
                })}
            </section>
        );
    }
}

export default Feed;