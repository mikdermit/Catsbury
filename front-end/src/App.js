import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";

function App() {
    return (
        <Routes>
            <Route path="*" element={<Layout />} />
        </Routes>
    );
}

export default App;
