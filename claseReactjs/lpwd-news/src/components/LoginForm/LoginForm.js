import React from 'react';
export default class LoginForm  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };
    }

    handleEmailChange(eve){
        this.setState({
            email:eve.target.value
        });
    }

    handlePasswordChange(eve){
        this.setState({
            password:eve.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    
        if (this.props.onSubmitCallback) {
          this.props.onSubmitCallback(this.state.email, this.state.password);
        }
      }
    

   
    render(){
        const {email,password}=this.state;
        return (
            <form onSubmit={(evt) => this.handleSubmit(evt)}>
                <input type='email' placeholder ='Email' value={email} onChange={(event)=>this.handleEmailChange(event)} ></input>
                <input type='password' placeholder ='Most de passe' value={password} onChange={(event)=>this.handlePasswordChange(event)}></input>
                <button type='submit'>Login</button>
            </form>
           
        );
    }
}
