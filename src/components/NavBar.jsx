import React from 'react';


const NavBar = () => {

    return (
        <div>
            <header>
                <div className="top">
                    <p>THE BEST ONLINE SHOPPING WEBSITE OF IVORY COAST</p>
                </div>
                <nav>
                    <div className="nav-left">
                        <span>Dak-shop</span>
                        <img src={require('../images/logo.jpg')} alt="my-logo"/>
                    </div>
                    <div className="nav-middle">
                        <ul>
                            <li>Products</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className="search">
                            <input type="text" placeholder="search..."/>
                            <div className="search__icon--box">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <a href="" className="btn">
                            My cart
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </a>
                        <a href="" className="btn">
                            Login
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;