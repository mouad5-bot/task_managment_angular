import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import * as TaskActions from './task.action';
import { ITask, } from "../../models/task";


export interface TaskState {
  tasks: ITask[];
  error: string
}

const initialState: TaskState = {
  tasks: [],
  error: ''
};

export const taskReducer = createReducer(
  initialState,

  on(TaskActions.getTasksSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks,
      error: ''
    };
  }),
  on(TaskActions.getTasksFailure, (state, action): TaskState => {
    return {
      ...state,
      tasks: [],
      error: ''
    };
  }),


  //
  // on(createAction('[Task] Toggle Task code '), state => {
  //   console.log("original state" + JSON.stringify(state));
  //   return{
  //     ...state,
  //     showTaskCode: !state.showTaskCode
  //   };
  // }),

  on(TaskActions.addTask, (state, { text }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      { id: state.tasks.length + 1, text }
    ]
  })),

  on(TaskActions.updateTask, (state, { id, newText }) => ({
    ...state,
    tasks: state.tasks.map(task => (task.id === id ? { ...task, text: newText } : task)),
  })),

  on(TaskActions.deleteTask, (state, { id }) => ({
    ...state,
    task: state.tasks.filter(task => task.id !== id)
  })),
);
