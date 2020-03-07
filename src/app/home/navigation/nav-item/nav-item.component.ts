import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: any;
  themes: any;
  constructor(private router:Router) {
  }

  ngOnInit() {
    // console.log(this.item,this.router)
  }


}
