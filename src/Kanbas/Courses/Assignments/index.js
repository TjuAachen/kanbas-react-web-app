import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentTab from "./AssignmentTab";


function Assignments() {
  const { courseId } = useParams();

  return (
    <div style={{width: "100%"}}>
    <div className="row" style={{ display: 'flex', marginTop: '10px' }}>
      <div className="col-2">
        <input className="form-control" value="Search for assignment" style={{ width: 'fit-content' }} />
      </div>
      <div className="col-3"></div>
      <div className="col-7" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-grey btn-secondary">+Group</button>
        <Link to={"addAssignment" }><button className="btn btn-danger">+Assignment</button></Link>
        <button className="btn btn-grey btn-secondary">
          <Link to={`/`}>
            <svg style={{color: "black"}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M9.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
    <hr />

        <AssignmentTab courseId={courseId} />

    </div>
  );
}
export default Assignments;