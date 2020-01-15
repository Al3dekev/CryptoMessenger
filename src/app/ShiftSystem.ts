import {CryptionService} from "./services/cryption.service";


export class ShiftSystem{

  constructor(private cs:CryptionService){

  }

  backToMainMenu(){
    this.cs.pageArea = 0;

  }


  EncryptingData(text:string, decal:number){

    let strEncoded = '';
    let letter = '';
    let codeASCII = 0;
    let i;

    if(decal < 0){
      decal = decal + 26;
    }

    for(i = 0; i < text.length; i++){

      codeASCII = text[i].charCodeAt(0);


      if ((codeASCII >= 65) && (codeASCII <= 90)){ //Majuscule
        if ((codeASCII + decal) > 90){
          letter = String.fromCharCode((65+((codeASCII+decal)-90))-1);
        }else{
          letter = String.fromCharCode(codeASCII+decal);
        }
      } else if((codeASCII >= 97) && (codeASCII <= 122)) { //Minuscule
        if ((codeASCII + decal) > 122){
          letter = String.fromCharCode((97+((codeASCII+decal)-122))-1);
        }else{
          letter = String.fromCharCode(codeASCII+decal);
        }
      }else{
        letter = text[i]
      }


      strEncoded += letter;

    }
    return strEncoded
  }

  DecryptingData(text:string, decal:number){
    let strDecoded = '';
    let letter = '';
    let codeASCII = 0;
    let i;
    if(decal < 0){
      decal = decal + 26
    }

    for(i=0;i<text.length;i++){

      codeASCII = text[i].charCodeAt(0);

      if ((codeASCII >= 65) && (codeASCII <= 90)){
        if ((codeASCII - decal) < 65){
          letter = String.fromCharCode(90-(65-(codeASCII-decal))+1);
        }else{
          letter = String.fromCharCode(codeASCII-decal);
        }

      } else if ((codeASCII >= 97) && (codeASCII <= 122)) {
        if ((codeASCII - decal) < 97){
          letter = String.fromCharCode(122-(97-(codeASCII-decal))+1);
        }else{
          letter = String.fromCharCode(codeASCII-decal);
        }
      }else{
        letter = text[i]
      }
      strDecoded += letter;
    }
    return strDecoded
  }



}