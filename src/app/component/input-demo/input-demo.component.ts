import { ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {
  cities:Array<{name:string,code:string}>;
  selectedCity: { name: string; code: string; };

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.selectedCity=  {name: 'London', code: 'LDN'}
  }
  text: string;

  disabled: boolean = true;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
}
