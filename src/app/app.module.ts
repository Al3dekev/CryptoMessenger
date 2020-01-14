import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";
import {EncryptionPageComponent} from "./components/encryption-page/encryption-page.component";
import {DecryptionPageComponent} from "./components/decryption-page/decryption-page.component";
import {CryptionService} from "./services/cryption.service";

@NgModule({
  declarations: [
    AppComponent,
    EncryptionPageComponent,
    DecryptionPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MatButtonModule
  ],
  providers: [
    CryptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
