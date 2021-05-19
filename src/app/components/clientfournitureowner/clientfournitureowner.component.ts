import {Component, OnInit} from '@angular/core';
import {ShoppingServiceService} from "../../Services/shopping-service.service";
import {Delivery, OrderStatus} from "../../Models/Delivery";
import {Fourniture} from "../../Models/Fourniture";

function hello() {
  alert('Product Shipped Succefully !');
}

@Component({
  selector: 'app-clientfournitureowner',
  templateUrl: './clientfournitureowner.component.html',
  styleUrls: ['./clientfournitureowner.component.css']
})
export class ClientfournitureownerComponent implements OnInit {

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;

  constructor(private Shopping: ShoppingServiceService,) {
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
    document.body.appendChild(this.ScriptElement3);
  }

  Delivery = new Delivery(0, 0, '', 0, '', OrderStatus.Processing);

  Fouronwerlist: Fourniture[] = [];
  selectedfour?: Fourniture;


  ngOnInit(): void {
  }

  getowner(userid: number) {
    this.Shopping.getfourOwnerbyid(userid).subscribe((data: Fourniture[]) => {
      console.log(data);
      this.Fouronwerlist = data;

    });
  }

  onSelect(four: Fourniture): any {
    this.selectedfour = four;
    this.Shopping.Getdelowneruser(this.selectedfour.FournitureId).subscribe((data: Delivery) => {
      console.log(data);
      this.Delivery = data;
      console.log(  this.Delivery );

      return   this.Delivery;
    });
    return this.Delivery;


  }


  Shiporder(Delid : number){
    this.Shopping.Ship(Delid).subscribe();
    hello();
  }

}
