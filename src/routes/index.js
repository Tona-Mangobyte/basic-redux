import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/product/List";
import ProductCreate from "../pages/product/Create";
import StudentList from "../pages/student/List";


const AppRoute = (props) => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/create" element={<ProductCreate />} />
            <Route path="/student/list" element={<StudentList />} />
        </Routes>
    );
};

export default AppRoute;
