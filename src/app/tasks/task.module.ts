import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {taskReducer} from "./state/task.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TaskEffects} from "./state/task.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ]
})
export class TaskModule { }
