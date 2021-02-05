/** Component to visualize stacks */

import React from "react";
import { StackItem } from "../StackItem/StackItem";

export const Stack = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.items.map((item, index) => (
        <StackItem key={index} value={item}></StackItem>
      ))}
    </div>
  );
};
