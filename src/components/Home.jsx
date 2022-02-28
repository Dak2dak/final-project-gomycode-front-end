import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import Popup from "./Popup";
import './Popup.css';

const Home = () => {

    const [btnPopup, setBtnPopup] = useState(false);

    const handleClick = () => {
        
    }

    return (
    <div>

        <SideBar />
        <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
            <form action="" className="login-form">
                <div className="headings">
                    <span>Login</span>
                </div>
                <div className="container">
                    <div className="name">
                        <label for="">Username</label>
                        <input type="text" />
                    </div>
                    <div className="password">
                        <label for="">Password</label>
                        <input type="text" />
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <label for="">Remember me</label>
                    </div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </Popup>
    </div>
);
};

export default Home;
