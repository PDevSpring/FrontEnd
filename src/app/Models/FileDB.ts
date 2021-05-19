export  class FileDB{
  constructor(
    public id: number,
    public name: string,
    private type: string,
    public data: Blob,
    private dataValue: string
  ){}

}
