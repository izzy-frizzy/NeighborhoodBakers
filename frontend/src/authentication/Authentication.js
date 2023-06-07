import React, { useState } from 'react';
import "./Authentication.css";
import Login from './Login';
import Signup from './Signup'

function Authentication() {
    const [active, setActive] = useState("login");
    const handleChange = () =>{
        setActive(active === "login" ? "signup" : "login");
    }

    return (
        <div className='auth'>
            <div className='auth_left'>
                <img src="https://readingterminalmarket.org/wp-content/uploads/2022/06/philadelphia-market-bakery.jpg" alt="" />
            </div>
            <div className='auth_right'>
                {active === "login" ? (<Login />) : (<Signup />)}

                <div className='auth_more'>

                    <span>
                        {active === "login" ? (<>Dont have an account?<button onClick={handleChange}>Sign up</button></>) :
                            (<>Have an account?<button onClick={handleChange}>Log in</button></>)}

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Authentication