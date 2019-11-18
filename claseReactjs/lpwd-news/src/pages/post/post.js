import React from 'react';
import { getPost } from '../../api/api.js';
import Comments from '../../components/comments/comments.js'
import CommentForm from '../../components/commentForm/ComentForm.js';
export default class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      date: '',
      text: '',
      comments: [],
      idNotFound:false
    };
  }

  componentDidMount() {
    const { match } = this.props;

    const postId = parseInt(match.params.id);
    getPost(postId).then((result) => {
        if(result== null){
            this.setState({isNotFound:true})
        }else{
            this.setState({
                title: result.title,
                author: result.author,
                date: result.date,
                text: `${result.contentText}<br><a target="_blank" href="${result.contentUrl}">${result.contentUrl}</a>`,
                comments: result.comments
                
              });
        }
     
    });
  }

  onCommentSubmit(text){
    const newCom={
      author:'Anonymous',
      contentText:text
    }
    const currentComments =this.state.comments;
    currentComments.push(newCom);
    this.setState({
      comments: currentComments
    })
    console.log('rec',text);
  }

  render() {
    const { title ,isNotFound,author,date,text,comments} = this.state;
  
if(isNotFound===true){
    return (<h1>Post Not found</h1>)
}
    return (
      <section>
        <h3>{ title }</h3>
        <p>by { author}- {date}</p>
     <p dangerouslySetInnerHTML={{ __html: text }}></p>
        
        
        <div>
          <CommentForm  onSubmitCallback={(text) => this.onCommentSubmit(text)} />

            {comments.map((comm, i) => {
                return ( <Comments  key={i} 
                    author={comm.author} 
                    text={comm.contentText}
                    />);
          })}
        </div>
      </section>
    );
  }
}