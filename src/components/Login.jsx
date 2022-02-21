import React from 'react';


const Login = () => {

    return (
        <div>
            <form action="">
                <div className="headings">
                    <span>Login</span>
                    <div className="close">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
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
        </div>
    )
}

export default Login;