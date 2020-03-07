import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NavigationAnimation } from '../navigation.animation';
import { ThemesService } from '../../customizer/customizer.service';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: NavigationAnimation,
})
export class NavCollapseComponent implements OnInit {
  @Input()
  item: any;
  public isOpen = false;
  color: any;
  constructor(private themesStatus: ThemesService, private router: Router) { }

  ngOnInit() {
    this.themesStatus.get().subscribe((result) => {
      this.color = result.fontColor;
    })
    if (this.color === null || this.color === undefined) {
      const storage = window.localStorage;
      if (storage.themes === 'light') {
        this.color = '#58B2DC'
      } else {
        this.color = '#fff'
      }
    }

    // NavItem open ? close
    if (this.isUrlInChildern(this.item, this.router.url)) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  toggleOpen(e) {
    e.stopPropagation();
    this.isOpen = !this.isOpen
  }

  private isUrlInChildern(parent, url) {
    if (!parent.children) {
      return false
    }
    for (const item of parent.children) {
      if (item.children) {
        if (this.isUrlInChildern(item, url)) {
          return true
        }
      }
      if (item.url === url) {
        return true
      }
    }
  }


  expand() {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
  }

  collapse() {
    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;
  }

}
