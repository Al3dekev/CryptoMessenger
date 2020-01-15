import {Component, OnInit} from '@angular/core';
import {CryptionService} from "../../services/cryption.service";
import {ShiftSystem} from "../../ShiftSystem";

@Component({
  selector: 'app-encryption-page',
  templateUrl: './encryption-page.component.html',
  styleUrls: ['./encryption-page.component.css']
})
export class EncryptionPageComponent extends ShiftSystem implements OnInit {





  constructor(cs:CryptionService) {
    super(cs);
    this.pageProcess = "Encryption";
  }




  ngOnInit() {
  }

}
