import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import * as TaskActions from './task.action';
import { ITask, } from "../../models/task";


export interface TaskState {
  tasks: ITask[];
  currentTaskId: number | null;
  error: string
}

const initialState: TaskState = {
  tasks: [],
  currentTaskId: null,
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



  on(TaskActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      { id: state.tasks.length + 1, task }
    ]
  })),
  on(TaskActions.addTaskSuccess, (state, action): TaskState => {
    const newTasks = Array.isArray(action.task) ? action.task : [action.task];

    return {
      ...state,
      tasks: [...state.tasks, ...newTasks],
      currentTaskId: newTasks[newTasks.length - 1]?.id || state.currentTaskId,
      error: ''
    };
  }),

  on(TaskActions.addTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      error: action.error,
    };
  }),


  on(TaskActions.updateTask, (state, { id, newText }) => ({
    ...state,
    tasks: state.tasks.map(task => (task.id === id ? { ...task, text: newText } : task)),
  })),

  on(TaskActions.deleteTask, (state, { id }) => ({
    ...state,
    task: state.tasks.filter(task => task.id !== id)
  })),
);
