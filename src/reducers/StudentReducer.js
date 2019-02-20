//Reducers are functions that return a piece of state
const students = [
    'Stanley',
    'Kyle',
    'Rob',
    'Ron',
    'JR',
    'Matt'
];

/*All reducer functions have two params:
    1) Current State (Usually you'll want to provide a default state)
    2) Info that came from the action*/

export default function(state = students,action){
    if(action.type === 'ADD_STUDENT'){
        //Acknowledges this action and updates
        let newStudents = state.slice();
        newStudents.push(action.payload);
        return newStudents;
    } else {
        return state;
    }
}