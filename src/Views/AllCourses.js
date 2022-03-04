import * as React from "react"
import CourseTable from "../Components/CourseTable"
import { CourseService } from "../Service/CourseService"


export default class AllCourses extends React.Component {

    state = {
        courses: []
    }

    // overide component did mount, after the table is rendered
    // render empty table then call ajax call
    // get .then() successful call back .cache() fall callback

    componentDidMount() {
        CourseService.GetAllCourses().then( response => {
            // successful callback
            this.setState({
                courses: response.data
            })
        }).catch(error => {
            // failed callback
            console.log(error)
        })
    }

    enrollCourse(courseName) {
        CourseService.enrollCourse(courseName)
            .then(response => {
                alert(`${courseName} enrolled successfully!` )
            }).catch(error => {
            alert(`${courseName} enrolled failed ${error}!` )
        })
    }
    render() {
        return(
            <div>
                {/* <h1>This is all courses</h1> */}
                <CourseTable courses={this.state.courses}
                             buttonLabel={"Enroll"}
                             buttonColor={"success"}
                             handleButtonClick={this.enrollCourse}
                />

            </div>
            
            
        )
    }
}