import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { DeleteTaskComponent } from './tasks/delete-task/delete-task.component';
import { ListTaskComponent } from './tasks/list-task/list-task.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { StoreModule } from '@ngrx/store';
import {taskReducer} from "./tasks/state/task.reducer";
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {TaskModule} from "./tasks/task.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatSelectModule} from "@angular/material/select";

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
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    TaskModule,
    MatSelectModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
