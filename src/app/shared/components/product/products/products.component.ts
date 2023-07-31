import { Component, OnInit } from '@angular/core';
import { Iperson, Iplayer } from '../../model/mode.components';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public persons :Array<Iperson> =[
{
  fname:'Rajesh',
  lname:'Sutare',
  contact:8623882700,
  skills:['Angular' , 'TS' , 'JS' , 'SASS' , 'Node.Js'],
  married:false,
  isWorking:true
},
{
  fname:'Raj',
  lname:'Sutare',
  contact:8623882700,
  skills:['Angular','TS','JS','SASS','Node.Js'],
  married:false
},
{
  fname:'Tony',
  lname:'Stark',
  contact:8623882700,
  skills:['Angular','TS','JS','SASS','Node.Js','AI'],
  married:true,
  isWorking: true
},
{
  fname:'Steve',
  lname:'Jobs',
  contact:8623882700,
  skills:['React','TS','JS','SASS','Node.Js','AI'],
  married:false,
  isWorking: false
}
  ];

public players :Array<Iplayer>=[
  {
    fname :'Rohit',
    jercyNo:48,
    team:'India',
    centuries:36
  },
  {
    fname :'Chris Gayle',
    jercyNo:11,
    team:'West Indies',
    centuries:39
  },
  {
    fname :'Sachiin',
    jercyNo:138,
    team:'India',
    centuries:52
  },
  {
    fname :'Virat',
    jercyNo:79,
    team:'India',
    centuries:48
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
