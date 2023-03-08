import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import ProductList from "../pages/product/List";
import ProductCreate from "../pages/product/Create";


const AppRoute = (props) => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/create" element={<ProductCreate />} />
        </Routes>
    );
};

export default AppRoute;
