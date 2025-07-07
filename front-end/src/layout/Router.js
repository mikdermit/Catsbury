import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NotFound from "./NotFound";

function Router() {
    // display error if any
    return (
        <Routes>
            <Route path='/' exact={true} element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<Home />} />
            <Route path='*' element={<NotFound />} />
            {/*<Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} >
            <Route path="/adopt" element={<Adopt />} >
            <Route path="/adopt/application" element={<AdoptApplication />} >
            <Route path="/foster/application" element={<FosterApplication />} >
            <Route path="/shop" element={<Shop />} >
            <Route path="/donate" element={<Donate />} >
            */}
        </Routes>
    );
}

export default Router;
