import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/images/galleria1.jpg'});
    this.images.push({source:'assets/images/galleria2.jpg'});
    this.images.push({source:'assets/images/galleria3.jpg'});
    this.images.push({source:'assets/images/galleria4.jpg'});
    this.images.push({source:'assets/images/galleria5.jpg'});
    this.images.push({source:'assets/images/galleria6.jpg'});
    this.images.push({source:'assets/images/galleria7.jpg'});
    this.images.push({source:'assets/images/galleria8.jpg'});
    this.images.push({source:'assets/images/galleria9.jpg'});
    this.images.push({source:'assets/images/galleria10.jpg'});
    this.images.push({source:'assets/images/galleria11.jpg'});
    this.images.push({source:'assets/images/galleria12.jpg'});
  }

}
