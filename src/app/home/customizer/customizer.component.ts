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
  brandColor: string;
  navigationColor: string;
  navigationActiveColor: string;

  layout = {
    footerLayout: 'show'
  }

  color = {
    headerColor: '',
    brandColor: '',
    navigationColor: '',


    navigationActiveColor: ''

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
      this.color.headerColor = 'linear-gradient(to right,#333,#194066)';
      this.color.brandColor = '#333';
      this.color.navigationColor = 'linear-gradient(to bottom,#2a2b2c,85%,#194066)';
      this.color.navigationActiveColor = 'dark';
      this.themesStatus.send('#fff')
      window.localStorage.setItem('themes', 'dark')

    } else {
      this.color.headerColor = '#58B2DC';
      this.color.brandColor = '#58B2DC';
      this.color.navigationColor = '#ffffff';
      this.color.navigationActiveColor = 'light'
      this.themesStatus.send('#58B2DC')
      window.localStorage.setItem('themes', 'light')
    }

    this.changethemes.emit(this.color)
  }
  layoutChange() {
    this.changelayout.emit(this.layout)
  }

}
