import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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

}
