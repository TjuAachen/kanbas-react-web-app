import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const [newTitle, setNewTitle] = useState(assignment.title); 

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    assignment.title = newTitle;
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ width: "100%" }}>
      <p>Assignment Name</p>
      <input value={newTitle}
        className="form-control mb-2" onChange={(e) => setNewTitle(e.target.value)}/>
      <div className="float-end"> 
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary" >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn me-2 btn-danger" style={{marginLeft: "5px"}}>
          Save
        </button>
      </div>
    <hr style={{clear:"both", marginTop: "60px"}}/>
    </div>
  );
}


export default AssignmentEditor;