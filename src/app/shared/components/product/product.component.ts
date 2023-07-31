import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

public productName : string =  'Iphone';
public productModel : string = '14 Pro Max';
public productInfo:string ='This is widely used and most populer mobile phone.';
public productId : number = 1234;
public IsCharger : boolean =false;

public states:Array<string> =['Maharashtra','Delhi','Andhra Pradesh','Kerala'];
public Cm:Array<string> =['Shinde','Kejariwal','Jagmohan Reddy','P.Vijayan'];
public income:Array<string>=['15L','10L','50L','35L'];
public products:Array<string> =['Iphone','samsung','Oppo','Blakberry'];
public prise:Array<string>=['80k','74k','34k','20k'];
public countries:Array<string> =['India','USA','Russia','China'];
public presidents:Array<string> =['Modi','Biden','Putin','Jinping'];



  constructor() { }

  ngOnInit(): void {
  }

}
