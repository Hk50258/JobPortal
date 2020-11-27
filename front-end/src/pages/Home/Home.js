import React, {useState} from 'react';
import {Link} from 'react-router-dom'
function Home(props) {
const [user] = useState(sessionStorage.getItem('user'))
const [role] = useState(sessionStorage.getItem('role'))

const Logout = () => {
    sessionStorage.clear()
    window.location.reload(false)
}
return (
        <div>
            <h4>Hi, {user}</h4>
            <p>You are a <b>{role}</b></p>
            <a onClick={Logout}>Logout</a>
        </div>
    );
}

export default Home;