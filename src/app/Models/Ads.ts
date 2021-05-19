export enum type{
  SELL, RENT, HOLIDAYS_RENTING, TEMPORARY_RENTING
}
export class Ads {
    constructor(
        public adID: number,
        public object: string,
        public description: string,
        public location: string,
        public serviceType: type,
        public   roomsNb: number,
        public   bathroomsNb: number,
        public   surface: number,
        public   balconiesNb: number,
        public    garagesNb: number,
        public   price: number,

        public   airConditioner: boolean,
        public  heater: boolean,
        public  swimmingPool: boolean,
        public   garden: boolean,
        public   furnished: boolean,

        public   likesNB: number,
        public   dislikeNB: number,
        public   kindofgood: string,
)
{}}
