import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListTaskComponent} from "./components/task/list-task/list-task.component";
import {AddTaskComponent} from "./components/task/add-task/add-task.component";
import {EditTaskComponent} from "./components/task/edit-task/edit-task.component";
import {DeleteTaskComponent} from "./components/task/delete-task/delete-task.component";
import {ListUserComponent} from "./components/user/list-user/list-user.component";
import {AddUserComponent} from "./components/user/add-user/add-user.component";
import {EditUserComponent} from "./components/user/edit-user/edit-user.component";
import {DeleteUserComponent} from "./components/user/delete-user/delete-user.component";
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
