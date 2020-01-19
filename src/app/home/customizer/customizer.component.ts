import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  @Input() settings: any;
  @Output() changethemes = new EventEmitter();
  @Output() changelayout = new EventEmitter();
  headerColor: string;
  brandColor: string;
  navigationColor: string;
  layout = {
    headerLayout: 'show',
    footerLayout: 'show'
  }
  
  color = {
    headerColor: '',
    brandColor: '',
    navigationColor: '',
  }
  _colors: string[] = ['Aqua', 'BlueViolet', 'Coral', 'Orange', 'SpringGreen', 'DeepSkyBlue'];
  constructor() { }
  ngOnInit() {
  }
  themesChange() {
    this.changethemes.emit(this.color)
  }
  layoutChange() {
    this.changelayout.emit(this.layout)
  }

}
