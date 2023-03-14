import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import HomeStyle from './Home.css'
import productList from '../Data/productData';
function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    let account = location.state?.account ;
    const name = Cookies.get('User');
    const isLoggedIn = Cookies.get('isLoggedIn');
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
    const seeProfile= () =>{
        navigate('/profile' ,{ state: { account} });
        window.location.reload();
    }
    const homePage =() =>{
        navigate('/',{ state: { account} });
        window.location.reload();
    }
    
    return (
        <div className="container custom-scrollbar">
            {
            }
            <header className='Header'>
                <nav id="navbar">
                    <div className="logo"><a onClick={homePage}>Foodie</a></div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#order">Order</a></li>
                        {isLoggedIn === 'true' ? <li><span>Xin chào <a onClick={seeProfile} className='name'>{name}</a></span></li> : ''}
                        <li>{isLoggedIn === 'true' ?
                            (<a onClick={LogOut}>LogOut</a>)
                            :
                            (<a onClick={Login}>Login</a>)}</li>
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

                <div className="overlay">
                    <section id="home">
                        <h1 className="h-primary">Welcome to Foodie</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorum numquam minus. </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        <button className="btn">Order Now</button>
                    </section>
                </div>
            </header>



            <div id="menu">
                <div className="heading">
                    <h1>Menu</h1>
                    <h3>Today's Special</h3>
                </div>


                {productList.map((product) => (
                    <div className="card" key={product.Id}>
                        <img src={product.ImageUrl} />
                        <div className="details">
                            <div className="details-sub">
                                <h5>{product.Name}</h5>
                                <h5 className="price">{product.Price}</h5>
                            </div>
                            <p>{product.Description}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>


            <div id="about">
                <h1 className="title">About us</h1>
                <div className="about_row">
                    <div className="about_column">
                        <p>Dear valued customer,

                            We hope this email finds you well. We wanted to reach out and invite you to learn more about our bear selling website. We offer a wide range of stuffed bears and teddy bears that are sure to bring a smile to your face.

                            Whether you're looking for a special gift for a loved one, or simply want to add a new addition to your collection, we have something for everyone. Our bears come in a variety of sizes, colors, and styles, so you're sure to find the perfect one for your needs.

                            To learn more, simply visit our website and browse our collection. If you have any questions or would like to place an order, our friendly customer service team is always available to assist you.

                            Thank you for your interest in our bear selling website. We look forward to serving you!

                            Best regards,
                            [Your Name]
                            [Your Company Name]</p>
                        <button id="btn1">learn more</button>
                    </div>
                    <div className="about_column">
                        <img src="https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?w=2000 " alt="" />
                    </div>
                </div>
            </div>
            <div id="order">
                <h1 className="title1">order</h1>
                <form action="" className='form-order'>
                    <input type="text" className="inp_box" placeholder="Name" />
                    <input type="email" className="inp_box" placeholder="Email" />
                    <textarea type="text" className="inp_box text_area" placeholder="Adress"></textarea>
                    <button className="btn2">Order Now</button>
                </form>
            </div>

        </div>
    );
}

export default Home;
