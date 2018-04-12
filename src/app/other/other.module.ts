import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Other1Component } from '../other1/other1.component';
import { Other2Component } from './other2/other2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Other1Component, Other2Component]
})
export class OtherModule { }
