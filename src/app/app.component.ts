import {Component} from '@angular/core';
import {CryptionService} from "./services/cryption.service";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title;


  constructor(private cs: CryptionService) {
    this.title = 'Crypto Messenger';
    this.cs.pageArea = 0;
  }



  clickOnEncryption(){
    console.log("you're in ENCRYPTION page");
    this.cs.pageArea = 1;
  }

  clickOnDecryption(){
    console.log("you're in DECRYPTION page");
    this.cs.pageArea = 2;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}
