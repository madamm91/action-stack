/** This is a HOC to use undo-redo stack */

import React, { useState } from "react";
import { ActionStackContext } from "./ActionStackContext";

export const ActionStack = (props) => {
  const [state, setState] = useState(props.initialState);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const popFromUndoStack = () => {
    const clone = [...undoStack];
    const last = clone.pop();
    setUndoStack(clone);
    return last;
  };

  const pushToUndoStack = (item) => {
    setUndoStack([...undoStack, item]);
  };

  const popFromRedoStack = () => {
    const clone = [...redoStack];
    const last = clone.pop();
    setRedoStack(clone);
    return last;
  };

  const pushToRedoStack = (item) => {
    setRedoStack([...redoStack, item]);
  };

  const cleanRedoStack = () => {
    setRedoStack([]);
  };

  return (
    <ActionStackContext.Provider
      value={{
        value: state,
        update: setState,
        undoStack,
        popFromUndoStack,
        pushToUndoStack,
        redoStack,
        popFromRedoStack,
        pushToRedoStack,
        cleanRedoStack,
      }}
    >
      {props.children}
    </ActionStackContext.Provider>
  );
};
