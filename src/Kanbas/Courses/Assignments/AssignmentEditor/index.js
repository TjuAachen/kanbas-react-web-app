import React, { useState } from "react";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import "../../../../index.css";
import * as client from "../client";

function AssignmentEditor() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { courseId } = useParams();

 
  var assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {dispatch(addAssignment(assignment))
  });
  };

  assignment = {...assignment, course : courseId}
  return (
    <div style={{ flex: "1" }}>
      <div className="row" >
        <p>Assignment Name</p>
        <input
          style={{ width: "100%", marginBottom: "10px" }}
          type="text"
          id="title"
          value={assignment.title}
          onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
        />
        <textarea
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
          type="text"
          id="title"
          value={assignment.description}
          onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
        />

        <div className="d-flex" style={{ justifyContent: "flex-end" }}>

          <label style={{ marginRight: "10px" }} for="points">Points</label>
          <input
            style={{ width: "60%", marginBottom: "10px" }}
            type="text"
            id="title"
            value={assignment.points}
            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
          />
        </div>

        <div className="d-flex" style={{ justifyContent: "flex-end" }}>

          <p style={{ marginRight: "10px" }}>Assign</p>
          <div className="border-length" style={{ borderStyle: "solid", width: "60%", padding: "20px 10px 20px 10px" }} >
            <strong>Due</strong>
            <input
              style={{ width: "100%", marginBottom: "10px" }}
              type="date"
              value={assignment.dueEndDate}
              onChange={(e) => dispatch(setAssignment({ ...assignment, dueEndDate: e.target.value }))}
            />
            <div className="d-flex">
              <div style={{ flex: "1" }}>
                <p><strong >Available From</strong></p>
                <input
                  style={{ width: "100%", marginBottom: "10px" }}
                  type="date"
                  value={assignment.dueStartDate}
                  onChange={(e) => dispatch(setAssignment({ ...assignment, dueStartDate: e.target.value }))}
                />
              </div>
              <div style={{ flex: "1" }}>
                <p><strong>Until</strong></p>
                <input
                  style={{ width: "100%", marginBottom: "10px" }}
                  type="date"
                  value={assignment.dueEndDate}
                  onChange={(e) => dispatch(setAssignment({ ...assignment, dueEndDate: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    <hr />
    <div>
      <div className="float-end">
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
      <button className="btn btn-danger" onClick={() => {currentPath.includes("addAssignment")? handleAddAssignment() : handleUpdateAssignment(); navigate(-1);}}>Save</button>
      </div>
    </div>
    </div>
  );



}


export default AssignmentEditor;