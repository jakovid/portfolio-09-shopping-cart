import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

export default function RouteSwitch() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/checkout' element={<CheckOut />} />
            </Routes>
        </BrowserRouter>
    )
}