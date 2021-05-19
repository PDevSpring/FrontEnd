import { Component, OnInit } from '@angular/core';
import {ShoppingServiceService} from "../../Services/shopping-service.service";
import {Fourniture} from "../../Models/Fourniture";
import {Delivery} from "../../Models/Delivery";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;

  constructor(private Shopping: ShoppingServiceService) {
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
  Fourlist: Fourniture[] = [];
  Dellist: Delivery[] = [];



  ngOnInit(): void {
  }

  GetDelivery(iduser: number){
    this.Shopping.Getdelbyuser(iduser).subscribe((data: Delivery[]) => {
      console.log(data);
      this.Dellist = data;

    });
}




}
