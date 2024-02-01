import { createAction, props } from '@ngrx/store';
import {ITask} from "../../models/task";


export const getTasks = createAction(
  '[Task] Get All'
);
export const getTasksSuccess = createAction(
  '[Task] Get All Success',
  props<{ tasks: ITask[] }>()
);
export const getTasksFailure = createAction(
  '[Task] Get All Fail',
  props<{ error: string }>()
);



export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: ITask }>()
);
export const addTaskSuccess = createAction(
  '[Task] Add Success',
    props<{ task: ITask }>()
);
export const addTaskFailure = createAction(
  '[Task] Add Fail',
  props<{ error: string }>()
);



export const updateTask = createAction(
  '[Task] Update Task',
  props<{ id: number, newText: string }>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: number }>()
);
