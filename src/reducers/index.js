/*Master Reducer

This is our state. It imports all of the little reducers.
It doesn't know or care about React.*/
import { combineReducers } from 'redux';

//We need a reducer to give to the master reducer
import StudentReducer from './StudentReducer';

//combineReducers takes 1 arg: an object with properties of what the state should be called and a value of the reducer
const rootReducer = combineReducers({
    students:StudentReducer,
})

export default rootReducer;