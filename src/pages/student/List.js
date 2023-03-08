import StudentsData from "../../containers/StudentsData";
import InputForm from "./InputForm";


const StudentList = (props) => {
    return(
        <div>
            <InputForm />
            <h3>Student List</h3>
            <StudentsData />
        </div>
    );
};

export default StudentList;
