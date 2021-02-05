/** Component to visualize undo-redo stacks and state */

import React, { useEffect } from "react";
import { useActionStack } from "../ActionStackHook/ActionStackHook";
import { Stack } from "../Stack/Stack";
import { State } from "../State/State";

export const Visualizer = (props) => {
  const [state, onAction, onUndo, onRedo, isUndoAvailable, isRedoAvailable] = useActionStack();
  return (
    <>
      <State value={state.value} />
      <div className={"container total"}>
        <Stack name={"Undo stack"} items={state.undoStack} />
        <div className={"separator"} />
        <Stack name={"Redo stack"} items={state.redoStack} />
      </div>
      <div className={"container center"}>
        <div>
          <button
            onClick={() => {
              onAction({ dev: false });
            }}
          >
            dev: false
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              onAction({ dev: true });
            }}
          >
            dev: true
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              onAction({ qa: false, prod: true });
            }}
          >
            qa: false prod: true
          </button>
        </div>
      </div>

      <div className={"container center"}>
        <button
          disabled={!isUndoAvailable}
          onClick={() => {
            onUndo();
          }}
        >
          Undo
        </button>
        <button
          disabled={!isRedoAvailable}
          onClick={() => {
            onRedo();
          }}
        >
          Redo
        </button>
      </div>
    </>
  );
};
