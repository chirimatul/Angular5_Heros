import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HerosComponent } from './heros/heros.component';


const appRoutes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent },
  { path: 'hero', component: HerosComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class TestRountModule {


}
