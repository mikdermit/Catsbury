import React, { Fragment } from "react";
import Routes from "./Router";

import "./Layout.css";

function Layout() {
    return (
        <Fragment>
            <div className="container-fluid h-100 p-0">
                <div className="container-fluid">
                    <Routes />
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;
