import React from 'react';
//import ArticlePreview from '../../components/articlePreview/articlePreview.js'

class  Films extends React.Component{
    render(){
        const{ posts } =this.props;
        return (
            <section>
               {posts.map((post, i) => {
                    return (
                        console.log(post)
                    );
                })}
            </section>
        );
    }
}
export default Films;