import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand" href="/">
                    <img
                        src="/media/Tradex.png"
                        alt="TradeX"
                        width="140"
                    />
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                Signup
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;