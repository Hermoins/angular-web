import { Component, OnInit } from '@angular/core';
import { NavigationModel } from './navigation/navigation.model';

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
  footerLayout = 'show'
  headerLayout= 'show'

  constructor(private na:NavigationModel) { }

  ngOnInit() {
    this.navigationModel = this.na.model;
    this.sidenavOpen = true
  }

  onActivate(event, scrollContainer) {
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
    this.headerLayout = event.headerLayout;
    this.footerLayout = event.footerLayout
  }

}
