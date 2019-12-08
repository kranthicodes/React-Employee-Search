import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://picsum.photos/seed/${props.employee.id}/180`}
        alt="employee"
      />
      <h2>{props.employee.name}</h2>
      <p>{props.employee.email}</p>
    </div>
  );
};
