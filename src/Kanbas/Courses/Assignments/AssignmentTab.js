import React, { useState, useEffect } from 'react';
import AssignmentItem from './AssignmentItem';
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
  setAssignments
} from "./assignmentsReducer";

function AssignmentTab({courseId}) {
  const dispatch = useDispatch();

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>{
        dispatch(setAssignments(assignments))
    
  })}, [courseId]);

  const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
    <a
      style={{ paddingTop: '15px', paddingBottom: '15px' }}
      className="list-group-item list-group-item-secondary"
      onClick={toggleCollapse}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
        <path
          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
        <path
          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
        />
      </svg>
      <i className="fa fa-caret-down" style={{ color: 'black' }}></i>
      <strong style={{ fontWeight: 'bold' }}>Assignments for course {courseId} </strong>
      <div className="float-end" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="pill-border">40% of Total</div>
        <i className="fa fa-plus" style={{ color: 'black', marginRight: '40px' }}></i>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
          <path
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
      </div>
    </a>
    <div id="module1">
          {isCollapsed
            ? null
            : courseAssignments.map((assignment, index) => (
                <AssignmentItem
                  assignment={assignment}
                  index = {index}
                />
              ))}
    </div>
    </>
  );
}

export default AssignmentTab;
