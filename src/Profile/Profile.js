import Cookies from "js-cookie";
import { useNavigate, useLocation } from 'react-router-dom';
import profileStyle from './Profile.css'
function Profile() {
    const name = Cookies.get('User');
    const location = useLocation();
    const account = location.state?.account;
    const navigate = useNavigate();
    const LogOut = () => {
        Cookies.set('isLoggedIn', false);
        Cookies.set('User', '');
        navigate('/');
        window.location.reload();
    }
    const homePage = () => {
        navigate('/', { state: {account:location.state?.account} });
        window.location.reload();
    }
    return (
        <div className="container custom-scrollbar">
            <div>
                <nav id="navbar">
                    <div className="logo"><a onClick={homePage}>Foodie</a></div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#order">Order</a></li>
                        <li><span>Xin chào <a className='name'>{name}</a></span></li>
                        <li>
                            <a onClick={LogOut}>LogOut</a>
                        </li>
                    </ul>
                </nav>
                <div id="mobile">
                    <div className="logo1"><span>Foodie</span></div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#order">Order</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
            <div className="body-profile">
                <h1 id="Portrait-header">  Personal Information</h1>
                <div id="pictureAndChooseFileDiv">
                    <img src={account.imageUrl} />
                </div>

                <form>

                    <label id="personalInfoLabel" htmlFor="firstName">Họ và Tên: </label>
                    <input type='text' name="firstName" id="firstName" className="personalInfoFilling-field" value={account.name} readOnly /> <br />

                    <label id="personalInfoLabel" htmlFor="lastName">Số điện thoại </label>
                    <input type='text' name="lastName" id="lastName" className="personalInfoFilling-field" value={account.phone} readOnly /> <br />


                    <label id="personalInfoLabel" htmlFor="emailAddress">Địa chỉ </label>
                    <input type='text' name="emailaddress" id="emailAddress" className="personalInfoFilling-field" value={account.address} readOnly />


                </form>
            </div>

        </div>
    )
}

export default Profile;