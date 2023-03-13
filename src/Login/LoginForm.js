import { useState } from 'react';
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();

    const handleChangeUserName = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassWord = (event) => {
        setPassword(event.target.value);
    };
    let useAccount = [
        { username: 'admin', password: '123456', role: 'admin' },
        { username: 'longpt', password: '171000', role: 'user' },
        { username: 'user3', password: 'password3', role: 'user' }
    ]
    // async function handleSubmit(event) {
    //     event.preventDefault();

    //     try {
    //       const user = await login(username, password);
    //       console.log('Logged in as', user.username);
    //     } catch (error) {
    //       console.error('Failed to login:', error.message);
    //     }
    //   }
    const login = (event) => {
        event.preventDefault();
        const account = useAccount.find(account => account.username === username && account.password === password);
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Tên đăng nhập hoặc mật khẩu không được để trống');
        }
        // kiểm tra tài khoản và mật khẩu ở đây
        else if (account) {
            // nếu đăng nhập thành công, lưu trạng thái login vào cookie
            Cookies.set('isLoggedIn', 'true', { expires: 1 });
            Cookies.set('User', username);
            // chuyển hướng sang trang Home
            if (account.role === 'admin') {
                navigate('/admin', { state: { username } });
                window.location.reload();
            }
            else {
                navigate('/', { state: { username } });
                window.location.reload();
            }
        } else {
            // nếu đăng nhập không thành công, hiển thị thông báo lỗi
            setErrorMessage('Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu');
        }
    };
    return (
        <div className='login-box'>
            <h2>Login</h2>
            <form onSubmit={login}>
                <div className="user-box">
                    <input type="text" value={username} onChange={handleChangeUserName} />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" value={password} onChange={handleChangePassWord} />
                    <label>Password</label>
                </div>
                <button className="btn-submit" type='submit'>
                    Submit
                </button>
                <p style={{ color: 'red' }}>{errorMessage}</p>
            </form>
        </div>
    );
}
export default Login;