import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NavigationAnimation } from '../navigation.animation';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: NavigationAnimation,
})
export class NavCollapseComponent implements OnInit {
  @Input()
  item: any;
  public isOpen = true;
  constructor() { }

  ngOnInit() {
  }
  toggleOpen(e) {
    // e.preventDefault();
    e.stopPropagation();
    this.isOpen = !this.isOpen
  }

}
