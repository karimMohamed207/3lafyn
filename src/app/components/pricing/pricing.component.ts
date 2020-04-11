import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  number:number;
  from:string="tanta" ;
  to:string="cairo" ;
  dist:number  ;
  show:boolean=false;
  wait:boolean = false;
  car:number;
  price:number;
  network:string;

 getDistance() {
  this.network="";
  this.wait = true;
  this.show=false
  setTimeout(() => {
    this.wait = false;
    this.show = true;
    this.network="Sorry check your internet and try again";
  }, 7000);

    if ( !this.from || !this.to) {
        console.log('please enter the required field')
    } else {
        fetch(`http://www.mapquestapi.com/directions/v2/route?key=jO7091FNjRbzA3O9EA7AZD3mt2WRiozb&from=${this.from},EG&to=${this.to},EG`)
            .then(result => result.json())
            .then(res => {
                if (!`${res.route.distance * 1.6}`) {
                    alert("cannot fetch this place");
                } else {
                    this.dist= res.route.distance * 1.6; 
                    this.price = this.dist * this.car * this.number;
                }
            })
            .catch(err => { console.log(err) })
    }
}





  constructor() { }

  ngOnInit(): void {
  }

}
