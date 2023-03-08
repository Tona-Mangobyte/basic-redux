import React from "react";

const StudentRecords = (props) => {

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    props?.students?.map((student, index) => {
                        return(
                            <DisplayCell student={student} key={index} index={index} />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

const DisplayCell = (props) => {
    return(
        <tr>
            <td>{ props.student.name }</td>
            <td>{ props.student.tel }</td>
            <td>{ props.student.address }</td>
            <td>
                <button>edit</button>
                <button>remove</button>
            </td>
        </tr>
    );
}
export default StudentRecords;
