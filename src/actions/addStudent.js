/* An action exports a function, which must itself return an object
That object must have a prop of 'type' */

function addStudent(name){
    console.log("ADD STUDENT ACTION CALLED");
    return{
        type:'ADD_STUDENT',
        payload:name,
    }
}

export default addStudent;