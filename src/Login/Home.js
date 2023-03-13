import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
function Home() {
    const navigate = useNavigate();
    // const location = useLocation();
    // const [name, setName] = useState('');
    // console.log(name);
    const name = Cookies.get('User');
    const isLoggedIn = Cookies.get('isLoggedIn');
    // if(isLoggedIn ==='true'){
    //     setName(location.state.usename);
    // }
    const LogOut = () => {
        Cookies.set('isLoggedIn', false);
        Cookies.set('User', '');
        navigate('/');
        window.location.reload();
    }
    const Login = () => {
        navigate('/login');
        window.location.reload();
    }
    return (

        <div>
            <h1 style={text}>Trang Home</h1>
            <p style={ text}>Chào mừng {name ?? ''} đến với trang Home!</p>
            {isLoggedIn === 'true' ? (<button onClick={LogOut}>LogOut</button>) : (<button onClick={Login}>Login</button>)}
        </div>
    );
}
const text ={
    color:'white',
} 
export default Home;
