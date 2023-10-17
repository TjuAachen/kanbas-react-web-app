import { Link } from "react-router-dom";
import db from "../Database";
import CardView from "./CardView";

function Dashboard() {
    const courses = db.courses;
    return (
        <>
            <div className="row" style={{ width: "100%", padding: "12px"}}>

                <div >
                    <div className="row">
                        <h2 className="display-5">Dashboard</h2>
                        <hr />
                    </div>
                    

                    <div class="row">
  
                        <div>
                            <p class="h3" style={{ marginLeft: "2%" }}>Published Courses(12)</p>
                            <hr />
                        </div>

                    </div>

                    <div className="row">
                        <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {courses.map((course) => (
                                    <CardView id={course._id} name={course.name} number={course.number}>

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