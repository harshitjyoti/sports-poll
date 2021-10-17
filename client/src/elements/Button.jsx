import React from "react";

export const Button = ({ awayName, homeName, onClick, id }) => (
  <div className="button-container">
    <button
      className="home"
      data-test-name="home-value"
      data-id={id}
      onClick={() => onClick(id, "h")}
    >
      {homeName}
    </button>
    <button
      className="draw"
      data-test-name="draw"
      data-id={id}
      onClick={() => onClick(id, "d")}
    >
      Draw
    </button>
    <button
      className="away"
      data-test-name="away-value"
      data-id={id}
      onClick={() => onClick(id, "a")}
    >
      {awayName}
    </button>
  </div>
);
