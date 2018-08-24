import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  gallery: string[];
  training: string[];


  constructor() {
   
    this.gallery = [
     'galleria1', 'galleria2', 'galleria3', 'galleria4', 'galleria5', 
     'galleria6', 'galleria7', 'galleria8', 'galleria9', 'galleria10',
     'galleria11', 'galleria12'
    ];

    this.training = [
      'training1','training2','training3','training4','training5','training6','training7','training8','training9'
    ];
  }

  ngOnInit() {
  }

}
