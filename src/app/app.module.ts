import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HerosComponent } from './heros/heros.component';
import { HeroService } from './servies/hero.service';
import { TreeModule } from './tree/tree.module';
import { CustomDirective } from './cDirective/custom.directive';
import { OtherModule } from './other/other.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboadComponent,
    HerosComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TreeModule,
    OtherModule
  ],
  exports: [DashboadComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
