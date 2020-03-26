import { ConfirmationService } from 'primeng/api';
import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {
  cities = [];
  selectedCity: { name: string; code: string; };
  selectedCities = []
  strlist: any[];
  objlist: any[];

  constructor(private confirmationService: ConfirmationService, private ref: ChangeDetectorRef,private ngZone:NgZone) { }

  ngOnInit() {
    this.strlist = ['dalian','beijing','shanghai','london']
    this.objlist = [{name:'apple'},{name: 'orange'},{name: 'banana'}]
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.selectedCity = { name: 'London', code: 'LDN' }
  }
  text: string;

  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
    // this.cities.push({name:'dalian',code:'DL'})
    this.cities = [...this.cities, { name: 'dalian', code: 'DL' }]
    // this.cities.splice(this.cities.indexOf( { name: 'New York', code: 'NY' }), 1)
  }

  delete() {
    // let arr = []
    // this.cities.forEach((item) => {
    //  if(this.selectedCities.indexOf(item) === -1) {
    //   arr.push(item)
    //  }
    // })

    this.cities.splice(this.cities.findIndex((item) => { return item ===this.selectedCities[0]}),1)
    
    // this.cities.push({name:"wushan",code:"WS"})
    console.log(this.cities)
    // setTimeout(()=> {
    //   this.ref.detectChanges();
    //   this.refresh()
    // },100)

  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }
  public refresh() {
    this.ngZone.run(() => {});
  }

  strlistclick () {
    this.strlist.splice(0,1)
    // this.strlist.push('321312312')
  }
  objlistclick () {
    this.objlist.splice(0,1)
    // this.objlist.push({name:'1xxx'})
  }
}
