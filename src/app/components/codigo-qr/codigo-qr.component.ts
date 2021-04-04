import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.scss']
})
export class CodigoQrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';

}
