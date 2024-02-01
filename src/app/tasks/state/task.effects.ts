import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {concatMap, of} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TaskActions from './task.action';
import { TaskService } from '../../services/task.service';

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private taskService: TaskService) { }

  loadTasks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TaskActions.getTasks),
        mergeMap(() => this.taskService.getTasks()
          .pipe(
            map(tasks => TaskActions.getTasksSuccess ({ tasks })),
            catchError(error => of(TaskActions.getTasksFailure ({ error })))
          )
        )
      );
  });
  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap((action) => {
        console.log(action.task);
        return this.taskService.addTask(action.task).pipe(
          map(task => TaskActions.addTaskSuccess({task})),
          catchError(error => of(TaskActions.addTaskFailure({ error })))
        )
      })
    )
  });

}
