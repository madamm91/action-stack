/** This file describes the ActionStack hook */

import { useContext } from "react";
import { ActionStackContext } from "../ActionStack/ActionStackContext";
import { diff, apply } from "../utils/diff";

export function useActionStack() {
  const state = useContext(ActionStackContext);

  const onAction = (partial) => {
    const newState = { ...state.value, ...partial };
    state.pushToUndoStack(diff(newState, state.value));
    state.update(newState);
    state.cleanRedoStack();
  };

  const onUndo = () => {
    const delta = state.popFromUndoStack();
    const newState = apply(state.value, delta);
    const redo = diff(newState, state.value);
    state.pushToRedoStack(redo);
    state.update(newState);
  };

  const onRedo = () => {
    const delta = state.popFromRedoStack();
    const newState = apply(state.value, delta);
    const undo = diff(newState, state.value);
    state.pushToUndoStack(undo);
    state.update(newState);
  };

  const isUndoAvailable = state.undoStack.length > 0;
  const isRedoAvailable = state.redoStack.length > 0;

  return [state, onAction, onUndo, onRedo, isUndoAvailable, isRedoAvailable];
}
