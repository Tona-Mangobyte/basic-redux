
const students = (state = [], action) => {
    switch (action.type) {
        case 'STUDENT_FETCH':
            return [
                ...state,
                ...action.students,
            ]
        case 'UPDATE_STUDENT':
            const studentUpdate = state?.map((student, index) => {
                if (student.id === action.id) {
                    student.name = action.name;
                    student.tel = action.tel;
                    student.address = action.address;
                }
                return student;
            });
            return [
                ...studentUpdate
            ]
        case 'ADD_STUDENT':
            console.log('execute add new student in state');
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: action.name,
                    tel: action.tel,
                    address: action.address,
                }
            ]
        default:
            return state
    }
};
export default students;
