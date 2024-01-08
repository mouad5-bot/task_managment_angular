import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = "http://localhost:8080/api/v1/task/";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.api + "all");
  }

  getTaskById(id: number): Observable<ITask> {
    const url = `${this.api}/${id}`;
    return this.http.get<ITask>(url);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.api, task);
  }

  updateTask(id: number, updatedTask: ITask): Observable<ITask> {
    const url = `${this.api}/${id}`;
    return this.http.put<ITask>(url, updatedTask);
  }

  deleteTask(id: number): Observable<void> {
    const url = `${this.api}/${id}`;
    return this.http.delete<void>(url);
  }
}
