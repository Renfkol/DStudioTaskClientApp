export class PageInfo {
  constructor(
    public pageNumber:number,
    public totalPages:number,
    public hasPreviousPage:boolean,
    public hasNextPage:boolean=false) { }
}
