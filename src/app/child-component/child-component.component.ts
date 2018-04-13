import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';
import { notImplemented } from '@angular/core/src/render3/util';
import { timeout } from 'q';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()
  hero: Hero;
  @Output()
  informParent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  ngOnInit() {
    this.doProcessing();
  }

  loop: number = 0;
  doProcessing() {
    if (this.loop == 0) {
      setTimeout(() => {
        this.informParent.emit("Calling after 10 sec");
      }, 10000);
    }
    this.loop++;
  }
}
