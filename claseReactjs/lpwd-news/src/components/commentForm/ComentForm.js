import React from 'react';
export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'Entre votre Commentaire',
            hasEnteredText:false
        }
    }
    handleChange(event){
        this.setState(
            {
                text:event.target.value,
                hasEnteredText:true
            }
        )
        console.log(event.target.value);
    }
    clearInput() {
        if (this.state.hasEnteredText === false) {
          this.setState({
            text: '',
            hasEnteredText: false
          });
        }
      }

      handleSubmit(event) {
          event.preventDefault();
        if (this.props.onSubmitCallback !== undefined) {
            this.props.onSubmitCallback(this.state.text);
            console.log('BOUM');
          }

      }
    
    render(){
        const{ text } =this.state;
        return(
            <form onSubmit={(evt) => this.handleSubmit(evt)}>
                 <textarea col="60"  value={text}  onChange={(evt) => this.handleChange(evt)} onFocus={() => this.clearInput()}></textarea>
                <button type="submit">send</button>
            </form>
        );
    }
}