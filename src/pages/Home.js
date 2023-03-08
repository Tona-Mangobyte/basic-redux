import React, { useEffect } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";


const HomePage = (props) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    });

    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};

export default HomePage;
