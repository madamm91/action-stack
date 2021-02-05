/** Component to visualize stack items */

import React from "react";

export const StackItem = (props) => {
  const entries = Object.entries(props.value.set);
  const any = entries.length + props.value.delete.length > 0;
  return (
    <>
      {any && (
        <p>
          {entries.map(([key, value]) => (
            <span className={"set"} key={`set_${key}`}>
              {key}: {`${value}`}{" "}
            </span>
          ))}
          {props.value.delete.map((key) => (
            <span className={"delete"} key={`del_${key}`}>
              {key}{" "}
            </span>
          ))}
        </p>
      )}
      {any || <p className={'delete'}>-</p>}
    </>
  );
};
