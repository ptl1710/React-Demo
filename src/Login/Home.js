import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

 function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.username
    console.log(name);
    const LogOut = () =>{
        Cookies.set('isLoggedIn',false);
        navigate('/');
        window.location.reload();
    }
    return (
        <div>
            <h1>Trang Home</h1>
            <p>Chào mừng {name} đến với trang Home!</p>
            <button onClick={LogOut}>LogOut</button>
        </div>
    );
}

export default Home;
