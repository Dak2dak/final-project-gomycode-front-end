import React from 'react';
const Card = () => {

    return (
        <div className="container-2">
            <img src="./images/picture1.png" alt=""/>
            <div className="card-down">
                <span>Jordan Nitro 4</span>
                <div className="price-box">
                    <span>100€</span>
                </div>
                <div className="btn">
                    <a href="" className="search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="" className="cart-btn">
                        <i className="fa-solid fa-cart-arrow-down"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;