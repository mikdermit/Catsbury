import React from "react";
import logo from "../images/logo.png";

function Footer() {
    return (
        <div class="container">
            <footer class="row row-cols-7 p-3 mt-4 border-top">
                <div class="col">
                    <a
                        href="/home"
                        class="d-flex justify-content-center align-items-center mb-3 link-dark text-decoration-none"
                    >
                        <img
                            src={logo}
                            style={{ width: "60px" }}
                            class="rounded-pill"
                            alt="Catsbury Logo"
                        />
                    </a>
                    <p class="text-muted text-center ">© 2021</p>
                </div>

                <div class="col-3">
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-phone-slash me-3"/>
                        <p class="p-0 my-2 text-muted">
                            WE DO NOT HAVE A PHONE
                        </p>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-at me-3" />
                        <p class="p-0 my-2 text-muted">info@catsburypark.com</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-envelope me-3" />
                        <p class="p-o my-2 text-muted">
                            PO BOX 1597, Asbury Park NJ 07712
                        </p>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-location-dot me-3" />
                        <p class="p-0 my-2 text-muted">
                            901 3rd Ave, Asbury
                            Park, NJ 07712
                        </p>
                    </div>
                </div>

                <div class="col">
                    <h5>Contact</h5>

                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link p-0 text-muted">
                                Join Mailing List
                            </a>
                        </li>
                    </ul>
                    <ul class="nav flex-column"></ul>
                </div>

                <div class="col">
                    <h5>Apply</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a
                                href="/adopt/application"
                                class="nav-link p-0 text-muted"
                            >
                                Adopt
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a
                                href="/foster/application"
                                class="nav-link p-0 text-muted"
                            >
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
                            <a
                                href="https://catsburyconvention.com/"
                                class="nav-link p-0 text-muted"
                            >
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
