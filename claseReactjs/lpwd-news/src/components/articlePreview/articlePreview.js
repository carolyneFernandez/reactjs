import React from 'react';
import {Link} from 'react-router-dom';

export default  class ArticlePreview extends React.Component{
    render(){
        const{ title ,author,creationDate,id} =this.props;
        return (
            <article>
                <h3>{ title }</h3>
                <p>by { author } - { creationDate }</p>
                <Link to={'/post/' + id} >Read</Link>

            </article>
            
        );
    }
}
