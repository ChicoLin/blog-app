import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {TechPageComponent} from './tech-page/tech-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'hack', component: TechPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
