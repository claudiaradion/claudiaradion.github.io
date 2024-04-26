import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";

function CustomMenu() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="android" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default CustomMenu;
