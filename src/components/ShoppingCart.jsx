import React from 'react';
import './cart.css';

const ShoppingCart = () => {

    return (
        <div>
            <h1 className="cart-title">Votre <span className="orange-title">Panier</span></h1>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>NAME</th>
                        <th>UNIT PRICE</th>
                        <th>QUANTITY</th>
                        <th>DELETE</th>
                        <th >TOTAL PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="cell-1">
                            <img src={require("../images/picture1.png")} alt="Oups!" />
                        </td>
                        <td>Air Jordan red</td>
                        <td><span>85</span></td>
                        <td>
                            <button className="increase_btn">
                                <span className="increase"><i className="fa-solid fa-plus"></i></span>
                            </button>
                            <span className="quantity"> 1 </span>
                            <button className="decrease_btn">
                                <span className="decrease"><i className="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button className="cart-red-btn">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                        <td className="cell-6"> 85 </td>
                    </tr>
                    <tr>
                        <td className="cell-7">
                            <img src={require("../images/picture2.jpg")} alt="Oups!" />
                        </td>
                        <td>Air Jordan white</td>
                        <td> 300 </td>
                        <td>
                            <button className="increase_btn">
                                <span className="increase"><i className="fa-solid fa-plus"></i></span>
                            </button>
                            <span className="quantity"> 1 </span>
                            <button className="decrease_btn">
                                <span className="decrease"><i className="fa-solid fa-minus"></i></span>
                            </button>
                        </td>
                        <td>
                            <button className="cart-red-btn">
                                <span><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </td>
                        <td className="cell-12"> 300 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShoppingCart;