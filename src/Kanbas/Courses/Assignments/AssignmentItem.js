import React from 'react';
import { Link } from "react-router-dom";
import StackWithCheckIcon from '../../../Widgets/StackWithCheckIcon';
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";


function AssignmentItem({ assignment, index }) {
  var id = assignment._id
  var courseId = assignment.course
  var title = assignment.title
  var start_date = assignment.dueStartDate
  var deadline_date = assignment.dueEndDate
  var deadline_time = assignment.dueTime
  const dispatch = useDispatch();
  return (
     <div className="list-group-item">
        <div class="container" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <svg style={{ marginRight: '30px' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <Link onClick={() => dispatch(setAssignment(assignment))} to={`/Kanbas/Courses/${courseId}/Assignments/editAssignment`}>
          <i className="fa fa-edit" style={{ color: 'green', marginRight: '30px' }}></i>
          </Link>
          <div className="container">
            <p style={{ display: 'inline', color: "black" }}><b>{id} {title}</b><br />
              <p style={{ color: 'gray', display: 'inline' }}>Week {index} - {title} - Week starting on {start_date}  Module</p><br />
              <p style={{ color: 'gray', display: 'inline' }}><strong>Due</strong> {deadline_date} at {deadline_time} | 100 pts</p>
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: "center" }}>
            <StackWithCheckIcon />

            <span onClick={() => dispatch(deleteAssignment(assignment._id))} role="button" class="fa-stack small">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-trash fa-stack-1x fa-inverse"></i>
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512" style={{ marginLeft: "10px" }}>
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>


          </div>
        </div>
      </div>

  );
}

export default AssignmentItem;