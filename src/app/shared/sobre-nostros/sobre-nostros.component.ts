import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sobre-nostros',
  templateUrl: './sobre-nostros.component.html',
  styleUrls: ['./sobre-nostros.component.scss']
})
export class SobreNostrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // carousel option
   testimonialOptions: OwlOptions = {
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
    },
    nav: false,
  };
  
}
