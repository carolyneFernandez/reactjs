import React from "react";
import {Link} from "react-router-dom";

class FilmPreview extends React.Component {
    render() {
        const { title, releaseYear, slug} = this.props;
        return(
            <article><h3>{ title }</h3>
                <p>{releaseYear}</p>
                <Link to={'/film/' + slug} >Click here</Link>
            </article>
        )
    }
}

export default FilmPreview;