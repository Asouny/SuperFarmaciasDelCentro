import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyDirective } from './scrollspy.directive';
import { SobreNostrosComponent } from './sobre-nostros/sobre-nostros.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { HistoriaComponent } from './historia/historia.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';



@NgModule({
  declarations: [
    ScrollspyDirective, SobreNostrosComponent, ProvedoresComponent, HistoriaComponent, ContactanosComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    CommonModule,ScrollToModule,CountToModule,CarouselModule
  ],
  exports: [
    ScrollspyDirective, SobreNostrosComponent, ProvedoresComponent, HistoriaComponent, ContactanosComponent, HeaderComponent, FooterComponent
  ]
})

export class SharedModule { }
