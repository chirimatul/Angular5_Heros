import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HerosComponent } from './heros/heros.component';
import { HeroService } from './servies/hero.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboadComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
