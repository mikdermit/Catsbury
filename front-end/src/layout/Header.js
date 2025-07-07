import React from "react";
import logo from '../images/logo.png';

function Header() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                    <img src={logo} style={{ width: '60px' }} class="rounded-pill" /> 
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/visit">
                                Visit
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/adopt">
                                Adopt
                            </a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="/shop">
                                Shop
                            </a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="/donate">
                                Donate
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
