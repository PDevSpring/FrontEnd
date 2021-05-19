export enum OrderStatus {
  Processing, Shipped
}
export class Delivery {
  constructor(
    public  deliveryId: number,
    public Price: number,
    public moreinfo: string,
    public Deliverytype: number,
    public adress: string,
    public  orderstatus: OrderStatus

  ){}
}
