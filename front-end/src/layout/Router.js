import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../components/about/About";
import Adopt from "../components/adopt/Adopt";
import AdoptApp from "../components/applications/AdoptApp";
import Donate from "../components/donate/Donate";
import FosterApp from "../components/applications/FosterApp";
import Home from "../components/home/Home";
import NotFound from "./NotFound";
import Shop from "../components/shop/Shop";
import Visit from "../components/visit/Visit";

function Router() {
    // display error if any
    return (
        <Routes>
            <Route path='/' exact={true} element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/adopt/application" element={<AdoptApp />} />
            <Route path="/foster/application" element={<FosterApp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/donate" element={<Donate />} />
        </Routes>
    );
}

export default Router;
