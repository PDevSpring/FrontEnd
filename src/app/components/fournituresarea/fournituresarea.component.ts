import { Component, OnInit } from '@angular/core';

import {ShoppingServiceService} from '../../Services/shopping-service.service';
import {Fourniture, FournitureType} from '../../Models/Fourniture';
import {Cart} from '../../Models/Cart';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileDB} from '../../Models/FileDB';

// tslint:disable-next-line:typedef
function hello() {
  alert('Fourniture Added Succefully !');
}


@Component({
  selector: 'app-fournituresarea',
  templateUrl: './fournituresarea.component.html',
  styleUrls: ['./fournituresarea.component.css']
})
export class FournituresareaComponent implements OnInit {

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


   fourniture = new Fourniture( 0, '', true, 0 , '' , '', 0, '' ,    new FileDB(0, '', '', new Blob() , ''));
   fournitureselected = new Fourniture( 0, '', true, 0 , ''  , '', 0, '' ,    new FileDB(0, '', '', new Blob() , ''));
   addfourniture = new Fourniture( 0, '', true, 0 , ''  , '', 0, '' ,    new FileDB(0, '', '', new Blob() , '') );
  // selectedFile: File = ' ';
   selectedFile = new File([''], 'filename');
  fournitureadd = new Fourniture( 0, '', true, 0 , ''  , '', 0, '' ,   new FileDB(0, '', '', new Blob() , ''));

  Fourlist: Fourniture[] = [];
  cardFourlist: Fourniture[] = [];
  carduser = new Cart( 0,  0   );
  selectedfour?: Fourniture;

  // fournitureadd: Fourniture;
  // addfourniture: Fourniture;
  // selectedFile: File;

  isShowDivadd = false;
  isShowDivaddbutton = true;

  retrievedImage: any;
  base64Data = new Blob();
  retrieveResonse = new FileDB(0, '', '', new Blob(), '');
  imageName: any;

  imgsrc: any[] = [];
/*
  checkavaibilty(four: FournitureType): boolean{


    if ( (four) === (FournitureType.Dispo) ){
      return true;

    }
    else {
      return false;

    }
  }
*/

  ngOnInit(): void { this.Shopping.Getallfourniture().subscribe((data: Fourniture[]) => {
    console.log(data);
    this.Fourlist = data;
    this.Fourlist.forEach((value, index) => this.getImage(value.FournitureId) );

    console.log(this.imgsrc);



  });
  }

  getImage(fid: number): Blob {
    const url = 'http://localhost:3000/App/Four/getfourimg/' + fid ;
    this.httpClient.get<FileDB>(url)
      .subscribe(
        (res ) => {
          this.retrieveResonse = res;

          this.base64Data = this.retrieveResonse.data;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imgsrc.push(('data:image/jpeg;base64,' + this.base64Data));
          return this.base64Data;
        }
      );
    return this.base64Data;
  }




  Addfourniture(f: Fourniture, userid: number): Fourniture{
    this.Shopping.addfour(f, userid).subscribe( (data) => {
      this.fournitureadd = data;
      this.Shopping.fileUpload(this.selectedFile, this.fournitureadd.FournitureId).subscribe();
      hello();
    });
    return this.fournitureadd;
  }


  // tslint:disable-next-line:typedef
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  // tslint:disable-next-line:typedef
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(0) , ms )).then(() => console.log('fired'));
    this.ngOnInit();
  }

  // tslint:disable-next-line:typedef
  Upload(f: Fourniture, userid: number){
    this.Addfourniture(f, userid);
    this.delay(3000);
  }


   /*
     getImage(fid: number) {
    const url = 'http://localhost:3000/App/Four/getfourimg/' + fid ;
    this.httpClient.get<FileDB>(url)
      .subscribe(
        (res ) => {
          console.log(res);
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }



    Addfourniture(f: Fourniture, userid: number): Fourniture{
    console.log(f);
    console.log(userid);

    const HttpUploadOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    };

    const file = new FormData();
    file.append('imgfile', this.selectedFile, this.selectedFile.name);

    console.log(this.selectedFile.name);
    console.log(this.selectedFile);

    this.Shopping.addfour(f, userid).subscribe( (data) => {
      this.fournitureadd = data;
      console.log(this.fournitureadd);
      const url = 'http://localhost:3000/App/Four/addfourimg/' + this.fournitureadd.FournitureId ;
        this.httpClient.post(url, file).subscribe(res => {
        console.log(res);
        });
    });
    return this.fournitureadd;
  }

  const a = this.fournitureadd.FournitureId;
    this.delay(3000);
    const file = new FormData();
    console.log(this.selectedFile.name);
    console.log(this.selectedFile);
    const url = 'http://localhost:3000/App/Four/addfourimg/' + a ;
    file.append('imgfile', this.selectedFile, this.selectedFile.name);
    this.delay(3000);
    this.httpClient.post(url, file).subscribe(res => {
        console.log(res);
      }
    );


    onUpload() {
      console.log(this.selectedFile);
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.httpClient.post('http://localhost:3000/App/Four/getfourimg/', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
            if (response.status === 200) {
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
        ); }

    onUpload() {
      console.log(this.selectedFile);
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.httpClient.post('http://localhost:3000/App/Four/getfourimg/', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
    ); }*/

  // tslint:disable-next-line:typedef


  onSelect(four: Fourniture): void {
    this.selectedfour = four;
  }
  // tslint:disable-next-line:typedef
  showDiv() {
    this.isShowDivadd = !this.isShowDivadd;
    this.isShowDivaddbutton = !this.isShowDivaddbutton;

    // this.myAbsolutelyNotNullElement.style.display = 'block';
    // document.getElementById('addf').style.display = 'block';

  }

  Getc(cardid: number): Cart{
    return this.Shopping.GetCart(cardid);
  }
/*
  Createcart(userid: number){
    this.Shopping.createcarte(userid).subscribe();
  }*/
  GetCCartbyuser(userid: number): Cart{
    console.log(userid);

    this.Shopping.GetCartbyuser(userid).subscribe( (data) => {
    this.carduser = data;
    console.log(this.carduser);
    });
    return this.carduser;
  }


AddToCart(fourid: number, userid: number): any{
  const c: number = this.GetCCartbyuser(userid).cartId ;
  return this.Shopping.addtcart(fourid, c );
}

  RemovefCart(fourid: number, cartid: number): any{
    return this.Shopping.removefromcart(fourid, cartid);
  }



  // tslint:disable-next-line:typedef

  GetFourOwner(userid: number){
  return this.Shopping.getfourOwnerbyid(userid);
  }
  }
