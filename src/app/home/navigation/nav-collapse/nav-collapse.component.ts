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
  public isOpen = true;
  color: any;
  constructor(private themesStatus: ThemesService) { }

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
  }
  toggleOpen(e) {
    e.stopPropagation();
    this.isOpen = !this.isOpen
  }

}
