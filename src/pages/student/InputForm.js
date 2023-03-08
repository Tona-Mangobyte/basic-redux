import React from "react";
import { connect } from 'react-redux'
import {addStudent} from "../../actions";

const InputForm = (props) => {
    let name,tel, address;
    return(
        <div>
            <h3>Create Student</h3>
            <form onSubmit={e => {
                e.preventDefault()
                if (!name.value.trim() || !tel.value.trim() || !address.value.trim()) {
                    return
                }
                props.dispatch(addStudent(name.value, tel.value, address.value));
                name.value = '';
                tel.value = '';
                address.value = '';
            }}>
                <input ref={node => name = node} />
                <input ref={node => tel = node} />
                <input ref={node => address = node} />
                <button type="submit">
                    Add Student
                </button>
            </form>
        </div>
    );
};
export default connect()(InputForm);
