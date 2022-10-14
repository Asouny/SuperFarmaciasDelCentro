import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '',
    component: PrincipalPageComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
