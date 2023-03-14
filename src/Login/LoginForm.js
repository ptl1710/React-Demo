import { useState } from 'react';
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import LoginStyle from './LoginForm.module.scss';
import useAccount from '../Data/userData';
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
    
    const login = (event) => {
        event.preventDefault();
        const account = useAccount.find(account => account.username === username && account.password === password);
        console.log(account)
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
                navigate('/', { state: { account} });
                window.location.reload();
            }
        } else {
            // nếu đăng nhập không thành công, hiển thị thông báo lỗi
            setErrorMessage('Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu');
        }
    };
    return (
        <div className={LoginStyle["All"]}>
            <div className={LoginStyle['login-box']}>
                <h2>Login</h2>
                <form onSubmit={login}>
                    <div className={LoginStyle["user-box"]}>
                        <input type="text" value={username} onChange={handleChangeUserName} />
                        <label>Username</label>
                    </div>
                    <div className={LoginStyle["user-box"]}>
                        <input type="password" value={password} onChange={handleChangePassWord} />
                        <label>Password</label>
                    </div>
                    <button className={LoginStyle["btn-submit"]} type='submit'>
                        Submit
                    </button>
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;