import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";
import {EncryptionPageComponent} from "./components/encryption-page/encryption-page.component";
import {DecryptionPageComponent} from "./components/decryption-page/decryption-page.component";
import {CryptionService} from "./services/cryption.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
  providers: [
    CryptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
