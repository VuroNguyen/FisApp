
import AddClass from "../../components/home/AddClass";
import { addNewClass } from "../../redux/action";
import {connect} from 'react-redux';
import React from "react";


// class AddContainer extends React.Component {
//     render() {
//         return(
//             <AddClass/>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return{
//         classes: state.classReducers
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         onClickAdd: (inputClassName, inputTeacherName) => {
//             dispatch(addNewClass(inputClassName, inputTeacherName, inputManager, inputDate, inputTime, inputBuilding, inputRoom));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);

//, inputManager, inputDate, inputTime, inputBuilding, inputRoom