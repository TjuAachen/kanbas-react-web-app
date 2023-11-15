import { Link } from "react-router-dom";
import { React, useState } from "react";

import CardView from "./CardView";

function Dashboard({ courses, course, setCourse, addNewCourse, setCourses,
    deleteCourse, updateCourse }
) {

    return (
        <>
            <div className="row" style={{ width: "100%", padding: "12px" }}>

                <div >
                    <div className="row">
                        <h2 className="display-5">Dashboard</h2>
                        <hr />
                    </div>


                    <div class="row">

                        <div>
                            <p class="h3" style={{ marginLeft: "2%" }}>Published Courses({courses.length})</p>
                            <hr />
                        </div>

                    </div>

                    <div className="row">
                        <div style={{ display: "flex" }}>
                            <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            <button onClick={addNewCourse} className="btn btn-seconday float-end" style={{ backgroundColor: "green", marginLeft: "2%", marginRight: "2%", color: "white", width: "fit-content" }}>Add</button>
                            <button onClick={updateCourse} className="btn btn-seconday float-end" style={{ backgroundColor: "green", marginLeft: "auto", marginRight: "2%", color: "white", width: "fit-content" }}>Update</button>

                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {courses.map((course) => (
                                <CardView id={course._id} name={course.name} number={course.number} courses={courses} setCourses={setCourses} setCourse={setCourse} deleteCourse={deleteCourse}>

                                </CardView>
                            ))}

                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}
export default Dashboard;