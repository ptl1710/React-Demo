import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.username
    console.log(name);
    const LogOut = () => {
        Cookies.set('isLoggedIn', false);
        navigate('/');
        window.location.reload();
    }
    return (
        <div class="sidebar">
            <div class="sidebar__sections">
                <ul>
                    <li><a href="#">
                        <svg class="lnr lnr-layers icon"><use xlink:href="#lnr-layers"></use></svg>
                        Pages</a></li>
                    <li><a href="#">
                        <svg class="lnr lnr-map-marker icon"><use xlink:href="#lnr-map-marker"></use></svg>
                        Destinations</a>
                    </li>
                    <li><a href="#">
                        <svg class="lnr lnr-book icon"><use xlink:href="#lnr-book"></use></svg>
                        Blog</a></li>
                    <li><a href="#">
                        <svg class="lnr lnr-bus icon"><use xlink:href="#lnr-bus"></use></svg>
                        Travel Shows</a></li>
                    <li><a href="#">
                        <svg class="lnr lnr-bubble icon"><use xlink:href="#lnr-bubble"></use></svg>
                        Testimonials</a></li>
                </ul>
            </div>
            <div class="sidebar__subsections">
                <div class="sidebar__subsections-brand">Admin 1.0</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Showcase</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
