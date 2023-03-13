import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css';
function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state.username
    const LogOut = () => {
        Cookies.set('isLoggedIn', false);
        Cookies.set('User', '');
        navigate('/');
        window.location.reload();
    }
    return (
        <div>
            <header role="banner">
                <h1>Admin Panel</h1>
                <ul className="utilities">
                    <br />
                    <li className="users"><a href="#">{name}</a></li>
                    <li className="logout warn"><a  href="#" onClick={LogOut}>Log Out</a></li>
                </ul>
            </header>
            <nav role='navigation'>
                <ul className="main">
                    <li className="dashboard"><a href="admindashboard">Dashboard</a></li>
                    <li className="edit"><a href="#">Edit Website</a></li>
                    <li className="write"><a href="#">Write news</a></li>
                    <li className="comments"><a href="#">Ads</a></li>
                    <li className="users"><a href="#">Manage Users</a></li>
                </ul>
            </nav>

            <main role="main">

                <div className="panel important">
                    <h2>Write Some News</h2>
                    <ul>
                        <li>Information Panel</li>
                    </ul>
                </div>

                <div className="panel important">
                    <h2>Write a post</h2>
                    <form>
                        <div className="twothirds">
                            Blog title:<br />
                            <input type="text" name="title" size="40" /><br /><br />
                            Content:<br />
                            <textarea name="newstext" rows="15" cols="67"></textarea><br />
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Save" />
                        </div>
                    </form>
                </div>

            </main>
        </div>
    );
}

export default Home;
