import React from 'react';
import { Link } from "react-router-dom";
import blue from '../../images/blue.jpg';

function CardView({id, name, number}) {

  return (
    <div className="card" style={{ width: '18rem', margin: '15px' }}>
      <Link key={id} to={`/Kanbas/Courses/${id}`}>
        <img className="card-img-top" style={{ height: '10rem' }} src={blue} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{number}</h5>
          <p className="card-text">{name}</p>
          <i className="fa fa-edit"></i>
        </div>
      </Link>
    </div>
  );
}

export default CardView;

