import React from 'react';
import { getBestPosts } from '../../api/api.js';
import Feed from '../../components/Feed/Feed.js'

export default class BetPost extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
        };
    }
    componentDidMount() {
        this.setState({isLoading:true});
        getBestPosts().then((result) => {
            console.log(result);
          this.setState({
            posts: result,
          });
        });
    }


    render(){
        const{posts,isLoading}=this.state;
        return (
            <section>
                <h1>Welcome Home</h1>
                <Feed posts={posts}></Feed>
                    
            </section>
        );
    }
}