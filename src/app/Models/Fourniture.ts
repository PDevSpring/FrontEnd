import {FileDB} from './FileDB';

export enum FournitureType {
  Dispo, NotDispo
}
export class Fourniture {
  constructor(
    public  FournitureId: number,
    public quantity: string,
    public type: boolean,
    public Price: number,
    public Description: string,
    public Name: string,
    public usercard: number,
    public pubDate: string,
    public image: FileDB
  ) {
  }
}

