import { Component, OnInit } from '@angular/core';
import {ShiftSystem} from "../../ShiftSystem";
import {CryptionService} from "../../services/cryption.service";
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-decryption-page',
  templateUrl: './decryption-page.component.html',
  styleUrls: ['./decryption-page.component.css']
})
export class DecryptionPageComponent extends ShiftSystem implements OnInit {

  constructor(cs:CryptionService, es: ElectronService) {
    super(cs, es);
    this.pageProcess = "Decryption";
  }

  ngOnInit() {
  }

}
