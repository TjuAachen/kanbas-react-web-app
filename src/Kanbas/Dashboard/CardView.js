import React from 'react';
import { Link } from "react-router-dom";
import blue from '../../images/blue.jpg';
import "../../index.css";

function CardView({id, name, number, courses, setCourse, setCourses, deleteCourse}) {

  const editCourse = (id) => {
    courses.map((c) => {
      if (c._id === id) {
        setCourse(c);
      }
    })
    
  }
  
  return (
    <div className="card" style={{ width: '18rem', margin: '15px' }}>
      <Link key={id} to={`/Kanbas/Courses/${id}`}>
        <img className="card-img-top" style={{ height: '10rem' }} src={blue} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{number}</h5>
          <p className="card-text">{name}</p>
          <i className="fa fa-edit"></i>
          <div className="float-end">
            <button className='btn btn-grey btn-secondary' onClick={(event) => {
                event.preventDefault();
                editCourse(id);
              }}>Edit</button>
            <button className='btn btn-danger' onClick={(event) => {
                event.preventDefault();
                deleteCourse(id);
              }}
>Delete</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardView;

