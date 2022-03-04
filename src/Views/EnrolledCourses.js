// import React from "react"
// import {CourseService} from "../Service/CourseService";
// import CourseTable from "../Components/CourseTable";
//
// export default class EnrolledCourses extends React.Component {
//     state = {
//         courses: []
//     }
//     componentDidMount() {
//         CourseService.getStudentCourses().then( response => {
//             // successful callback
//             this.setState({
//                 courses: response.data
//             })
//         }).catch(error => {
//             // failed callback
//             console.log(error)
//         })
//     }
//
//     dropCourse(courseName) {
//         CourseService.dropCourse(courseName)
//             .then(response => {
//                 window.location.reload()
//                 alert(`${courseName} dropped successfully!` )
//             }).catch(error => {
//             alert(`${courseName} dropped failed ${error}!` )
//         })
//     }
//
//     render() {
//         return(
//             <div>
//                 {/*<h1>This is enrolled courses</h1>*/}
//                 <CourseTable courses={this.state.courses}
//                              buttonLabel={"Drop"}
//                              buttonColor={"error"}
//                              handleButtonClick={this.dropCourse}
//                 />
//             </div>
//         )
//     }
// }

import React, {useEffect} from "react";
import {CourseService} from "../Service/CourseService";
import CourseTable from "../Components/CourseTable";

export default function EnrollCourses() {
    const [courses, setCourses] = React.useState([]);
    useEffect(getEnrolledCourses,[]);

    function getEnrolledCourses() {
        CourseService.getStudentCourses().then(response => {
            setCourses(response.data)
        }).then(error => {
            console.error(error);
        })
    }

    function dropCourse(courseName) {
        CourseService.dropCourse(courseName).then(response => {
            alert(`${courseName} dropped successfully`);
            getEnrolledCourses();
        }).catch(error=>{
            alert(`${courseName} dropped failed due to${error}`);
        })
    }
    return (
        <div>
            <CourseTable courses={courses}
                         buttonLabel={"Drop"}
                         buttonColor={"error"}
                         handleButtonClick={dropCourse}
            />
        </div>
    )
}