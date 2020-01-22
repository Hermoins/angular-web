import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnChanges {
  @Input() navigationModel: any[];
  @Input() color: string;
  @Input() active: string;
  themestatus: string = '';

  constructor() { }

  ngOnChanges(event) {
    this.themestatus = this.active
  }
}
