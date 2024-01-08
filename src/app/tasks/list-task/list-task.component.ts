import {Component, OnInit} from '@angular/core';

/* NgRx */
import { Store } from '@ngrx/store';
import { TaskState } from '../state/task.reducer';
import * as TaskActions from '../state/task.action';
import * as TaskSelectors from '../state/task.selectors';
import {Observable} from "rxjs";
import {ITask} from "../../models/task";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit{
  pageTitle = 'Tasks';
  errorMessage$: Observable<string> | undefined

  taskList$: Observable<ITask[]> | undefined;

  constructor(private store: Store<TaskState>) { }

  ngOnInit(): void {

    this.taskList$ = this.store.select(TaskSelectors.getTasks);

    this.errorMessage$ = this.store.select(TaskSelectors.getError);

    this.store.dispatch(TaskActions.getTasks());
  }



















//   tasks?: ITask[];
//
//   constructor(private store<TaskState>) {}
//
// ngOnInit(): void {
//     this.getTasks
// }
//   getTasks(){
//     this.store.dispatch(getTasks)
//   }
}
