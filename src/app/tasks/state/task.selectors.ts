import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TaskState} from "./task.reducer";


const getTaskFeatureState = createFeatureSelector<TaskState>('tasks');

export const getTasks = createSelector(
  getTaskFeatureState,
  state => state.tasks
);

export const getError = createSelector(
  getTaskFeatureState,
  state => state.error
);
