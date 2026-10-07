import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "./landPage/home/HomePage";
import Signup from "./landPage/signup/Signup";
import About from "./landPage/about/AboutPage";
import Pricing from "./landPage/pricing/PricingPage";
import Product from "./landPage/products/ProductPage";
import Support from "./landPage/support/SupportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
    <Navbar/>

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />

            <Route path="/pricing" element={<Pricing />} />

            <Route path="/product" element={<Product />} />

            <Route path="/support" element={<Support />} />

        </Routes>
        <Footer/>
    </BrowserRouter>
);