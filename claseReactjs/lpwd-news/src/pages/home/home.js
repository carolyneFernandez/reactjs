import React from 'react';
import { Link } from 'react-router-dom';
import Feed from '../../components/Feed/Feed.js'
import { getPosts } from '../../api/api.js';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            isLoading:false

        };
    }
    componentDidMount() {
        this.setState({isLoading:true});
        getPosts().then((result) => {
          this.setState({
            posts: result,
            isLoading:false
          });
        });
    }

    render(){
        const{posts,isLoading}=this.state;
        return (
            <section>
                <h1>Welcome Home</h1>

                <p>Cras viverra justo quam, eu.</p>
                    <Link to="/about" className="link">About</Link>
                    {isLoading ===true ? 
                    (<p>Chargement</p> ):
                    (<Feed posts={posts}></Feed>)
                    }
            </section>
        );
    }
}

export default Home;