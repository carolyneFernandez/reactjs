import React from 'react';
 
export default  class Comments extends React.Component{
    render(){
        const{ author,text} =this.props;
        return (
            <div>
                
                <p>by { author }</p>
                <p> {text} </p>

            </div>
        );
    }
}
/*
export default function Comment(props) {
    const { author, text } = props;
  
    return (
      <div>
          <p>Comentarios</p>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <p>by {author}</p>
      </div>
    );
  }*/