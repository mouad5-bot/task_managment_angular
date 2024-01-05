import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';
import { DeleteTaskComponent } from './components/task/delete-task/delete-task.component';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    ListUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
