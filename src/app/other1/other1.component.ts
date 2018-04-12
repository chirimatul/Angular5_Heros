import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other1',
  templateUrl: './other1.component.html',
  styleUrls: ['./other1.component.css'],
  
})
export class Other1Component implements OnInit {

  @Input() message:string;
  constructor() { }

  ngOnInit() {
  }

}
