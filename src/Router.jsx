import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Addthis from './pages/Addthis';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addthis" element={<Addthis />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;