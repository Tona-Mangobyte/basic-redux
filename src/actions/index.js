let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addProduct = (name, qty, price) => ({
    type: 'ADD_PRODUCT',
    name,
    qty,
    price,
});

export const initStudents = (students) => ({
    type: 'STUDENT_FETCH',
    students,
});
export const addStudent = (name, tel, address) => ({
    type: 'ADD_STUDENT',
    name,
    tel,
    address,
});

export const updateStudent = (id, name, tel, address) => ({
    type: 'UPDATE_STUDENT',
    id,
    name,
    tel,
    address,
});
