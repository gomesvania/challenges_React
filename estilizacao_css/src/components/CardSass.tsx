import React from "react";

import "./Card.scss";

const CardSass = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{body}</div>
    </div>
  );
};

export default CardSass;
