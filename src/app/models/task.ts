import {ITag} from "./tag";

export class TaskClass implements ITask{
  constructor(
    public id?: number,
    public description?: string,
    public expDate?: Date,
    public completed?: boolean,
    public assignedDate?: Date,
    public hasChanged?: boolean,
    public tags?: ITag[]
  ) { }
}

export interface ITask{
  id?: number;
  description?: string;
  expDate?: Date;
  completed?: boolean;
  assignedDate?: Date;
  hasChanged?: boolean;
  tags?: ITag[];
}
