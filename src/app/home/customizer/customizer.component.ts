import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemesService } from './customizer.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  @Input() settings: any;
  @Output() changethemes = new EventEmitter();
  @Output() changelayout = new EventEmitter();
  themes: string;


  layout = {
    footerLayout: 'show'
  }

  themesColor = {
    headerColor: '',
    brandColor: '',
    navigationColor: '',
    fontColor: '',
  }

  // _colors: string[] = ['dark', 'light']; 
  _colors = [
    {
      key: 'dark',
      value: '暗い'
    },
    {
      key: 'light',
      value: '明るい'
    }
  ];
  constructor(private themesStatus: ThemesService) { }
  ngOnInit() {
    const storage = window.localStorage;
    this.themes = storage.themes;
    this.themesChange()
  }
  themesChange() {
    if (this.themes == 'dark') {
      this.themesColor.headerColor = 'linear-gradient(to right,#333,#194066)';
      this.themesColor.brandColor = '#333';
      this.themesColor.navigationColor = 'linear-gradient(to bottom,#2a2b2c,#194066)';
      this.themesColor.fontColor = '#fff'
      this.themesStatus.send(this.themesColor)
      window.localStorage.setItem('themes', 'dark')
    } else {
      this.themesColor.headerColor = '#58B2DC';
      this.themesColor.brandColor = '#58B2DC';
      this.themesColor.navigationColor = '#ffffff';
      this.themesColor.fontColor = '#58B2DC'
      this.themesStatus.send(this.themesColor)
      window.localStorage.setItem('themes', 'light')
    }

    // this.changethemes.emit(this.themesColor)
  }
  layoutChange() {
    this.changelayout.emit(this.layout)
  }

}
