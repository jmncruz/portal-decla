import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<h1>Login</h1>} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:param" element={<Home />} />
        </Routes>
    )
}