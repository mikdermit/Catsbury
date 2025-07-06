import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Dashboard from "../dashboard/Dashboard";
import CreateReservation from "../reservations/CreateReservation";
import EditReservation from "../reservations/EditReservation";
import SeatReservation from "../reservations/SeatReservation";
import SearchReservation from "../reservations/SearchReservation";
import CreateTable from "../tables/CreateTable";

function Routes() {
    // display error if any
    return (
        <Switch>
            <Route exact={true} path="/">
                <Redirect to={"/home"} />
            </Route>
            <Route path="/home">
                <Dashboard />
            </Route>
            <Route path="/about">
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
            
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;
