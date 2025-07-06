import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NotFound from "./NotFound";

function Router() {
    // display error if any
    return (
        <Routes>
            <Route path='/' exact={true} element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" exact={true} element={<Home />} />
            <Route path='*' element={<NotFound />} />
            {/*<Route path="/about">
                <About />
            </Route>
            <Route path="/visit">
                <Visit />
            </Route>
            <Route path="/adopt">
                <Adopt />
            </Route>
            <Route path="/adopt/application">
                <AdoptAplication />
            </Route>
            <Route path="/foster/application">
                <FosterApplication />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/donate">
                <Donate />
            </Route>
            */}
        </Routes>
    );
}

export default Router;
