import React from 'react'
import logo from "./Logo.png";
import "./Header.css";

export const Header = () => {
    return (
        <>
            <header>
                <img className='logo' src={logo} alt="" width="30" height="24" />
                <nav>
                    <ul className='links'>
                        <li>
                            Consulting Department
                            <ul className="dropmenu">
                                <li><a href="#">Gaynacologist</a></li>
                                <li><a href="#">Acute Disease</a></li>
                                <li><a href="#">Skin Disease</a></li>
                            </ul>
                        </li>
                        <li>Help Center
                        <ul className="dropmenu">
                                <li><a href="#">Money Bank</a></li>
                                <li><a href="#">Blood Bank</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </nav>
                <button className="btn btn-outline-dark login" type="button">Log In</button>
            </header>
        </>
    )
}
