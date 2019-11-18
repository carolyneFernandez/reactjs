import React from 'react';
import ArticlePreview from '../../components/articlePreview/articlePreview.js'

class Freed extends React.Component{
    render(){
        const{ posts } =this.props;
        return (
            <section>
               {posts.map((post, i) => {
                    return (
                        <ArticlePreview  key={i} 
                        title={post.title} 
                        author={post.author} 
                        creationDate={post.date}
                        id={post.id}
                        />
                    );
                })}
            </section>
        );
    }
}
export default Freed;