import Emmitter from 'component-emitter';

const state={
    user:null,
    getUser(){
        return this.user;
    },
    setUser(user){
        this.user=user
        this.emit('user:login',this.user)
    }
}
Emmitter(state);
export default state;