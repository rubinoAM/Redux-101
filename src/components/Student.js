import React, {Component} from 'react';

/* This container needs to know about the store so it can use its state
and update if needed. To accomplish this, we use the connect method from
react-redux. */
import { connect } from 'react-redux';

//We need bindActionCreators from Redux to get actions to dispatch to the reducers.
import { bindActionCreators } from 'redux';

class Student extends Component{
    /* constructor(){
        super()
    } */

    render(){
        const students = this.props.rightSideOfRoom.map((student,i)=>{
            return(
                <li key={i}>{student}</li>
            )
        });

        return(
            <div>
                <h1>Students</h1>
                {students}
            </div>
        );
    }
}

/*Function to map redux state to this component's props
Redux state always comes in as props*/
function mapStateToProps(state){    //state = rootReducer
    /*This function returns an object.
    Property will be props in this component and value will be the piece of state in the reducer.*/
    return{
        rightSideOfRoom: state.students,
    }
}

//export default Student;
export default connect(mapStateToProps)(Student);