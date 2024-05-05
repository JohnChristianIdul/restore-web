import React from "react";
import '../Styles/Header.css';
import logo_restore from '../images/logo_restore.png';

export default function Header(){
    const user = "Hannah";
    return(
        <div className="main">
           <img src={logo_restore} 
                className="logo"
                alt="logo"/>

            <h2>Hello, {user}</h2>
        </div>
    );
} 