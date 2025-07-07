import React from "react";
import logo from '../images/logo.png';

function Footer() {
    return (
        <div class="container">
            <footer class="row row-cols-5 py-5 my-5 border-top">
                <div class="col">
                    <a
                        href="/home"
                        class="d-flex align-items-center mb-3 link-dark text-decoration-none"
                    >
                        <img src={logo} style={{ width: '60px' }} class="rounded-pill" alt="Catsbury Logo" />
                    </a>
                    <p class="text-muted">© 2021</p>
                </div>

                <div class="col"></div>

                <div class="col">
                    <h5>Contact</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link p-0 text-muted">
                                Mailing List
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <h5>Apply</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a href="/adopt/application" class="nav-link p-0 text-muted">
                                Adopt
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href='/foster/application' class="nav-link p-0 text-muted">
                                Foster
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col">
                    <h5>Support</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a href="/shop" class="nav-link p-0 text-muted">
                                Shop
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="/donate" class="nav-link p-0 text-muted">
                                Donate
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="https://catsburyconvention.com/" class="nav-link p-0 text-muted">
                                Catsbury Park Cat Convention
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
