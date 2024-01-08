export class TagClass implements ITag{
  constructor(
    public id?: number,
    public name?: string
  ) { }
}

export interface ITag {
  id?: number;
  name?: string;
}


