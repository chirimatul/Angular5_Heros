import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HerosComponent} from "./heros/heros.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent },
  { path: 'hero', component: HerosComponent },
  { path: 'hero/:id', component: HerosComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [    RouterModule  ]
})
export class AppRoutingModule {

  

 }
