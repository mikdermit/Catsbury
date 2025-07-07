import Router from "./Router";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="container-fluid h-100 p-0">
            <Header />
            <div className="container-fluid">
                <Router />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
