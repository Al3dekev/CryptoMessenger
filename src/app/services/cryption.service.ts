import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptionService {


  /**
   *
   * 0: Main Menu
   * 1: Encryption Page
   * 2: Decryption Page
   *
   */
  _pageArea:number;

  constructor() { }




  get pageArea(): number {
    return this._pageArea;
  }

  set pageArea(value: number) {
    this._pageArea = value;
  }

}
