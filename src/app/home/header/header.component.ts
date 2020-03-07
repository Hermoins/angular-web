import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() customizer: any;
  @Input() sidenav: any;
  @Input() color: string;
  @Input() sideStatu: boolean;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('sideStatu')) {
      window.localStorage.setItem('currentStatu', changes.sideStatu.currentValue)

    }
  }
}
