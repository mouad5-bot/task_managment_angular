import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITask} from "../models/task";
import {ITag} from "../models/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private api = "http://localhost:8081/tags";

  constructor(private http: HttpClient) { }

  getTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(this.api);
  }
}
