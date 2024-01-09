import {ITag} from "./tag";

export class TaskClass implements ITask{
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public status?: string,
    public assigneeId?: number,
    public createdById?: number,
    public tagIds?: ITag[]
  ) { }
}

export interface ITask{
   id?: number,
   title?: string,
   description?: string,
   startDate?: Date,
   endDate?: Date,
   status?: string,
   assigneeId?: number,
   createdById?: number,
   tagIds?: ITag[]
}
