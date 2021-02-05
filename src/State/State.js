/** Component to visualize state */

import React from "react";

export const State = (props) => {
  const entries = Object.entries(props.value);
  const any = entries.length > 0;
  return (
    <>
      <h1>State</h1>
      {any && (
        <p>
          {entries.map(([key, value]) => (
            <span key={`set_${key}`}>
              {key}: {`${value}`}{" "}
            </span>
          ))}
        </p>
      )}
      {any || <p className={"delete"}>{"<empty>"}</p>}
    </>
  );
};
