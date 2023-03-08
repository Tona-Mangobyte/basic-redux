import React from "react";
import {connect} from "react-redux";
import StudentsData from "../../containers/StudentsData";
import InputForm from "./InputForm";
import {initStudents, addStudent, updateStudent} from "../../actions";
import {useForm} from "react-hook-form";

function useOnceCall(cb, condition = true) {
    const isCalledRef = React.useRef(false);

    React.useEffect(() => {
        if (condition && !isCalledRef.current) {
            isCalledRef.current = true;
            cb();
        }
    }, [cb, condition]);
}
const StudentList = (props) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        setValue
    } = useForm();

    useOnceCall(() => {
        const students = [
            {
                id: 1,
                name: 'Dara',
                tel: '012-000-000',
                address: 'PP'
            },
            {
                id: 2,
                name: 'Dara',
                tel: '012-000-000',
                address: 'PP'
            },
            {
                id: 3,
                name: 'Long',
                tel: '092-000-000',
                address: 'TK'
            },
            {
                id: 4,
                name: 'Tona',
                tel: '069-000-000',
                address: 'PV'
            }
        ];
        props.dispatch(initStudents(students));
        console.log(`execute useOnceCall`);
    });

    const handleCreateOrUpdate = (data) => {
        console.log(data);
        if (data?.id) {
            // execute update
            props.dispatch(updateStudent(data.id, data.name, data.tel, data.address))
        } else {
            props.dispatch(addStudent(data.name, data.tel, data.address));
        }
    }
    const handleEdit = (data) => {
        console.log(data);
        setValue('id', data?.id, { shouldDirty: true });
        setValue('name', data?.name, { shouldDirty: true, shouldValidate: true });
        setValue('tel', data?.tel, { shouldDirty: true });
        setValue('address', data?.address, { shouldDirty: true });
    }

    return(
        <div>
            <InputForm
                register={register}
                setValue={setValue}
                handleSubmit={handleSubmit}
                errors={errors}
                handleCreateOrUpdate={handleCreateOrUpdate}
            />
            <h3>Student List</h3>
            <StudentsData handleUpdate={handleEdit} />
        </div>
    );
};

export default connect()(StudentList);
