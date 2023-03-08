const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            console.log('execute add new product in state');
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: action.name,
                    qty: action.qty,
                    price: action.price,
                    amount: Number(action.qty) * Number(action.price),
                }
            ]
        default:
            return state
    }
};
export default products;
