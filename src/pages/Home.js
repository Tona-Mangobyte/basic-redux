import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";


const HomePage = (props) => {

    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};

export default HomePage;
