import {connect} from "react-redux";
import StudentRecords from "../pages/student/StudentRecords";


const mapStateToProps = state => ({
    students: state.students
});

export default connect(
    mapStateToProps,
)(StudentRecords);
