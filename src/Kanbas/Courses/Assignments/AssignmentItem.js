import React from 'react';
import { Link } from "react-router-dom";
import StackWithCheckIcon from '../../../Widgets/StackWithCheckIcon';



function AssignmentItem({id, courseId, title, index, deadline_date, deadline_time}) {
    const start_date = new Date(new Date(deadline_date) - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    return (
        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${id}`}>
        <div className="list-group-item">
        <div class="container" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <svg style={{ marginRight: '30px' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <i className="fa fa-edit" style={{ color: 'green', marginRight: '30px' }}></i>
          <div className="container">
            <p style={{ display: 'inline', color: "black" }}><b>{id} {title}</b><br />
            <p style={{ color: 'gray', display: 'inline' }}>Week {index} - {title} - Week starting on {start_date}  Module</p><br />
            <p style={{ color: 'gray', display: 'inline' }}><strong>Due</strong> {deadline_date} at {deadline_time} | 100 pts</p>
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems:"center" }}>
            <StackWithCheckIcon />
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512" style={{marginLeft:"10px"}}>
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </div>
        </div>
      </div>
      </Link>
    );
}

export default AssignmentItem;