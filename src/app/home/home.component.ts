import { Component, OnInit } from '@angular/core';
import { NavigationModel } from './navigation/navigation.model';
import { ThemesService } from './customizer/customizer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationModel]
})
export class HomeComponent implements OnInit {
  navigationModel: any[];
  layoutMode: boolean = false;


  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  sidenavAlign: string = 'start';
  customizerSidenavAlign: string = 'end';
  headerColor: string = '';
  brandColor: string = '';
  navcolor: string ='';
  active: string ='';
  footerLayout = 'show'

  constructor(private na:NavigationModel,private themes: ThemesService) { }

  ngOnInit() {
    this.navigationModel = this.na.model;
    this.sidenavOpen = true
  }

  onActivate(scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
  clickhandler(){
    this.sidenavOpen = false
  }
  changethemes(event) {
    this.headerColor = event.headerColor;
    this.brandColor = event.brandColor;
    this.navcolor = event.navigationColor;
  }

  changelayout(event){
    this.footerLayout = event.footerLayout
  }

}
