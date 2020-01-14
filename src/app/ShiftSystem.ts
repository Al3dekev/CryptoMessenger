import {CryptionService} from "./services/cryption.service";


export class ShiftSystem{

  constructor(private cs:CryptionService){

  }

  backToMainMenu(){
    this.cs.pageArea = 0

  }


  EncryptingData(text:string, decal:number){
    //process
    //return output text
  }

  DecryptingData(text:string, decal:number){
    //process
    //return output text
  }



}
