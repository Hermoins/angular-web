import { Component, OnInit, Input } from '@angular/core';
import { ThemesService } from '../../customizer/customizer.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: any;
  themes: any;
  constructor(private themesStatus:ThemesService) {
  }

  ngOnInit() {
   
  }


}
