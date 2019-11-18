import React from 'react';
import GlobalState from '../../global-state.js'
import LoginForm from '../../components/LoginForm/LoginForm.js';
import { login } from '../../api/api.js';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            isLogged: false
        };
    }

    
    componentDidMount(){
        const user=GlobalState.getUser();
        
        this.setUser(user)

        GlobalState.on('user:login',user=>{
            this.setUser(user)

        })

        
            
    }


    componentWillUnmount(){
        GlobalState.off('user:login');
    }



    setUser(user){
        if(user !== null){
            this.setState({
                firstName:user.firstname,
                lastName:user.lastname,
                isLogged: true

            })
        }else{
            this.setState({
                isLogged:false
            })
        }
    }
    onLoginSubmit(email, password) {
        console.log(email,password)
       login(email, password);
      }
    render(){
        const{firstName,lastName,isLogged}=this.state;
        return (
            <section>
                <h1>Profile</h1>
                {isLogged ?
                    <div>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    :
                    <LoginForm  onSubmitCallback={(email, pwd) => this.onLoginSubmit(email, pwd) } />
                }
                

            </section>
        );
    }
}

