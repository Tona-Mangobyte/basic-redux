import { combineReducers } from 'redux'
import todos from './todos'
import products from './products'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    products,
    visibilityFilter
})
