import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();

    // Get the final path parameter
    const pathSegments = location.pathname.split('/');
    const subPage = pathSegments[pathSegments.length - 1];

    const course = db.courses.find((course) => course._id === courseId);
    return (
        <>

            <div style={{ margin: "20px", alignItems: "center", height: "fit-content", width: "100%" }}>
                <div className="d-flex" style={{ alignItems: "center" }}>
                    <i className="fa fa-bars fa-2x" style={{ color: "red" }}></i>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                        <h5 className="title-text">Course {course.name} </h5>
                        <i style={{ margin: "4px 0 2px 15px" }} class="fa fa-chevron-right fa-1x"></i>
                        <h5 className="title-text" style={{ color: "black" }}>{subPage} </h5>
                    </div>

                </div>
                <hr />
                <div className="d-flex">
                    <div>
                        <p style={{ color: "grey", marginLeft: "20px" }}>{courseId}</p>
                        <CourseNavigation />
                    </div>

                    <div style={{ width: "5%" }}>


                    </div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />

                    </Routes>
                </div>


            </div>



        </>

    );
}
export default Courses;