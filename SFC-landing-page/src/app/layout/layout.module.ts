import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    CarouselModule,
    CountToModule,
    ScrollToModule,
    ScrollToModule.forRoot(),

    ]
})
export class LayoutModule { }
