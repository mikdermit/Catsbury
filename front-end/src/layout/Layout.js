import Router from "./Router";
import "./Layout.css";

function Layout() {
    return (
        <div className="container-fluid h-100 p-0">
            <div className="container-fluid">
                <Router />
            </div>
        </div>
    );
}

export default Layout;
