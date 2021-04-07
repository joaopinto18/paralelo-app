import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  url: any;
  prueba:boolean = false;
  filePath:String;
  constructor(private Firestorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'user_KW3uRXxAbvOF5N1nIX2LP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  upload(event){
    this.filePath = event.target.files[0];
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.filePath = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.prueba = true;
    }
  }


  sendqr(){
    const fileNameToDownload = 'image_qrcode';
    const base64Img = document.getElementsByClassName('bshadow')[0].children[0]['src'];
    fetch(base64Img)
        .then(res => res.blob())
        .then(async (blob) => {
          // IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob){
             window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
          } else { // Chrome
             const url = window.URL.createObjectURL(blob);
             const link = document.createElement('a');
             link.href = url;
             console.log(blob);
             
             
             //link.download = fileNameToDownload;
             //link.click();
             
             console.log(this.filePath);
             let identificador = Math.random();
             await this.Firestorage.upload('/images'+identificador+blob, blob).then(data => {
              data.ref.getDownloadURL().then(url => {
                  console.log(url);
                  
              });
          });
          }
       })
    }

  elementType = NgxQrcodeElementTypes.IMG;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

}
