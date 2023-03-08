
const students = (state = [], action) => {
    switch (action.type) {
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
