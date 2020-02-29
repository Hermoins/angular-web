import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NavigationModel } from './navigation/navigation.model';
import { ThemesService } from './customizer/customizer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NavigationModel]
})
export class HomeComponent implements OnInit{
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

  constructor(private na:NavigationModel,private el: ElementRef,private themesStatus: ThemesService) {

   }

  ngOnInit() {
    this.navigationModel = this.na.model;
    this.sidenavOpen = true;
    document.addEventListener('scroll', this.scrollbar.bind(this),true);
    this.themesStatus.get().subscribe((result) => {
      this.headerColor = result.headerColor;
      this.brandColor = result.brandColor;
      this.navcolor = result.navigationColor;
    })

  }

  scrollbar () {
    const h = this.el.nativeElement.querySelector('#scrollContainer').scrollTop;
    window.localStorage.setItem('scrollTop', h)
  }

  onActivate(e,scrollContainer) {
    console.log('dqweqeqew');
    scrollContainer.scrollTop = window.localStorage.scrollTop
  }
  clickhandler(){
    this.sidenavOpen = false
  }
  // changethemes(event) {
  //   this.headerColor = event.headerColor;
  //   this.brandColor = event.brandColor;
  //   this.navcolor = event.navigationColor;
  // }

  changelayout(event){
    this.footerLayout = event.footerLayout
  }

}
