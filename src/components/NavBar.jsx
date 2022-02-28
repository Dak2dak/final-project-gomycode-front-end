import React from 'react';


const NavBar = (props) => {

    return (
        <div>
            <header>
                <div className="top">
                    {/* <marquee behavior="slide" direction="right">
                        THE BEST ONLINE SHOPPING WEBSITE OF IVORY COAST
                    </marquee> */}

                    {/* Gotta look for something else as this one is deprecated */}
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
                        <button href="" className="btn">
                            My cart
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </button>
                        <button 
                            className="btn" 
                            onClick={() => props.handleClick}
                        >
                            Login
                            <i className="fa-solid fa-user"></i>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;