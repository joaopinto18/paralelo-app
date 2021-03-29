import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-faq',
  templateUrl: './vista-faq.component.html',
  styleUrls: ['./vista-faq.component.scss']
})
export class VistaFaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBox1:boolean = false;
  hideBox1:boolean = true;
  plus1:boolean = true;

  showBox2:boolean = false;
  hideBox2:boolean = true;
  plus2:boolean = true;

  showBox3:boolean = false;
  hideBox3:boolean = true;
  plus3:boolean = true;

  showingBox1(): void{
    this.showBox1 = true;
    this.plus1 = false;
  }

  hidingBox1(){
    this.hideBox1 = false;
    this.showBox1 = false;
    this.plus1 = true;
  }

  showingBox2(): void{
    this.showBox2 = true;
    this.plus2 = false;
  }

  hidingBox2(){
    this.hideBox2 = false;
    this.showBox2 = false;
    this.plus2 = true;
  }

  showingBox3(): void{
    this.showBox3 = true;
    this.plus3 = false;
  }

  hidingBox3(){
    this.hideBox3 = false;
    this.showBox3 = false;
    this.plus3 = true;
  }
}
