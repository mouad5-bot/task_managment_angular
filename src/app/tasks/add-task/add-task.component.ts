import {Component, NgModule, OnInit} from '@angular/core';
import {createAction, props, Store} from "@ngrx/store";
import {ITag} from "../../models/tag";
import {TagService} from "../../services/tag.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {addTask} from "../state/task.action";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit  {
  selectedTags: number[] = [];
  tags: ITag[] = [];
  taskForm: FormGroup ;

  constructor(private store: Store, private fb: FormBuilder, private router: Router, private tagService: TagService) {
    this.taskForm = this.fb.group({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
      assigneeId: '',
      createdById: '',
      tagIds: [this.selectedTags],
    });
  }

  ngOnInit() {
    this.tagService.getTags().subscribe((data: ITag[]) => {
      this.tags = data;
    });
  }

  onSubmit() {
    console.log(this.selectedTags);
    const newTask = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      startDate: this.taskForm.value.startDate,
      endDate: this.taskForm.value.endDate,
      status: this.taskForm.value.status,
      assigneeId: this.taskForm.value.assigneeId,
      createdById: this.taskForm.value.createdById,
      tagIds: this.taskForm.value.tagIds,
    };

    this.store.dispatch(addTask({ task: newTask }));
    this.taskForm.reset();
  }



  //   const newTask = { id: Date.now(), title: this.taskForm.value.title, completed: false };
  //   this.store.dispatch(this.addTask({ task: newTask }));
  //   this.taskForm.reset();
  //
  //   addTask()
  //   {
  //     this.store.dispatch(TaskActions.addTask({text: 'New Task'}));
  //   }

}
