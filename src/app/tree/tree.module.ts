import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { Tree1Component } from '../tree1/tree1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeComponent, Tree1Component],
  exports:[TreeComponent,Tree1Component],
  bootstrap:[Tree1Component]
})
export class TreeModule { }
