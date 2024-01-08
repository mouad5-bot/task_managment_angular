import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListTaskComponent} from "./tasks/list-task/list-task.component";
import {AddTaskComponent} from "./tasks/add-task/add-task.component";
import {EditTaskComponent} from "./tasks/edit-task/edit-task.component";
import {DeleteTaskComponent} from "./tasks/delete-task/delete-task.component";
import {ListUserComponent} from "./users/list-user/list-user.component";
import {AddUserComponent} from "./users/add-user/add-user.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: 'task/list', component: ListTaskComponent },
      { path: 'task/add', component: AddTaskComponent },
      { path: 'task/edit', component: EditTaskComponent },
      { path: 'task/delete', component: DeleteTaskComponent },

      { path: 'user/list', component: ListUserComponent },
      { path: 'user/add', component: AddUserComponent },
      { path: 'user/edit', component: EditUserComponent },
      { path: 'user/delete', component: DeleteUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
