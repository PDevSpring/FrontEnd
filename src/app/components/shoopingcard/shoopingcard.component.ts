import {Component, OnInit} from '@angular/core';
import {ShoppingServiceService} from '../../Services/shopping-service.service';
import {Fourniture} from '../../Models/Fourniture';
import {Cart} from '../../Models/Cart';
import {Delivery, OrderStatus} from '../../Models/Delivery';
import {FileDB} from '../../Models/FileDB';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shoopingcard',
  templateUrl: './shoopingcard.component.html',
  styleUrls: ['./shoopingcard.component.css']
})
export class ShoopingcardComponent implements OnInit {

  constructor(private Shopping: ShoppingServiceService, private httpClient: HttpClient) {
    this.ScriptElement = document.createElement('script');
    this.ScriptElement.src = '../../../assets/js/main.js';
    document.body.appendChild(this.ScriptElement);

    this.ScriptElement1 = document.createElement('script');
    this.ScriptElement1.src = '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    document.body.appendChild(this.ScriptElement1);

    this.ScriptElement2 = document.createElement('script');
    this.ScriptElement2.src = '../../../assets/vendor/php-email-form/validate.js';
    document.body.appendChild(this.ScriptElement2);

    this.ScriptElement3 = document.createElement('script');
    this.ScriptElement3.src = '../../../assets/vendor/swiper/swiper-bundle.min.js';
    document.body.appendChild(this.ScriptElement3); }

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;


  deliveryorder = new Delivery(0, 0, '', 0, '', OrderStatus.Processing);
  Fourlist: Fourniture[] = [];
  cardFourlist: Fourniture[] = [];
  carduser = new Cart( 0,  0   );
  selectedfour?: Fourniture;
  // fourniture = new Fourniture( 0, '', FournitureType.Dispo, 0 , ''  , '', 0, ''  );
  // fournitureselected = new Fourniture( 0, '', FournitureType.Dispo, 0 , ''  , '', 0, ''  );
  public show = false;

  isShowDiv = false;
  isbuy = false;
  retrievedImage: any;
  base64Data = new Blob();
  retrieveResonse = new FileDB(0, '', '', new Blob(), '');
  imageName: any;

  imgsrc: any[] = [];

  ngOnInit(): void {
  }
  Getbyuser(userid: number): Cart{
    this.Shopping.GetCartbyuser(userid).subscribe( (data) => {
      this.carduser = data;
      console.log(this.carduser);
      this.Getcfour(this.carduser.cartId);
    });
    return this.carduser;
  }
  getImage(fid: number) {
    const url = 'http://localhost:3000/App/Four/getfourimg/' + fid ;
    this.httpClient.get<FileDB>(url)
      .subscribe(
        (res ) => {
          this.retrieveResonse = res;

          this.base64Data = this.retrieveResonse.data;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imgsrc.push(('data:image/jpeg;base64,' + this.base64Data));
        }
      );
  }

  Getcfour(cardid: number): Fourniture[]{
     this.Shopping.GetCartfour(cardid).subscribe( (data) => {
      this.cardFourlist = data;
      this.cardFourlist.forEach((value, index) => this.getImage(value.FournitureId) );

    });
     return this.cardFourlist;
  }
  // tslint:disable-next-line:typedef
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  // tslint:disable-next-line:typedef
  finalDiv() {
    this.isbuy = !this.isbuy;
    this.isShowDiv = !this.isShowDiv;

  }

  BuyCartanddelivery(deltype: number, adr: string, moreinfo: string, cartid: number){
    this.deliveryorder.adress = adr;
    this.deliveryorder.Deliverytype = deltype;
    this.deliveryorder.moreinfo = moreinfo;
    console.log(this.deliveryorder);
    this.finalDiv();
    return this.Shopping.buytcart(this.deliveryorder , cartid);
  }

  DeleteFourfC(fourid: number, cartid: number){
    this.Shopping.removefromcart(fourid, cartid).subscribe();
    this.cardFourlist = this.Getcfour(cartid);
  }


}
