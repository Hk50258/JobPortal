import React,{useState} from 'react';
import {Validator} from '../../components/LoginValidator'
import {Redirect} from 'react-router-dom'
function Login(props) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const formSubmit = () => {
        const data = Validator(username,password)
        if (data.token){
            sessionStorage.setItem('user',data.user)
            sessionStorage.setItem('token',data.token)
            sessionStorage.setItem('role',data.role)
            sessionStorage.setItem('isLoggedIn',true)
            return <Redirect to='/home'/>
        }
    }
    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={formSubmit}>
            <input type='text' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}></input>
            <br/>
            <input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
            <br/>
            <input type='submit' value='Submit'></input>
            </form>
        </div>
    );
}

export default Login;