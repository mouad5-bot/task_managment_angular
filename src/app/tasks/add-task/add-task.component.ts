import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as TaskActions  from '../state/task.action';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private store: Store) {}

  addTask() {
    this.store.dispatch(TaskActions.addTask({ text: 'New Task' }));
  }

}
