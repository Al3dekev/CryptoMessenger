import {Component, OnInit} from '@angular/core';
import {CryptionService} from "../../services/cryption.service";
import {ShiftSystem} from "../../ShiftSystem";
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-encryption-page',
  templateUrl: './encryption-page.component.html',
  styleUrls: ['./encryption-page.component.css']
})
export class EncryptionPageComponent extends ShiftSystem implements OnInit {

  constructor(cs:CryptionService, es: ElectronService) {
    super(cs, es);
    this.pageProcess = "Encryption";
  }

  ngOnInit() {
  }

}
