import { Component, OnInit, ElementRef } from '@angular/core';
import { filter, map, reduce, concat } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableComponent implements OnInit {
  sales: any[];
  cols: any[];
  selectedItems: any[];
  selectedCars3: any[] = [];
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sales = [
      { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
      { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
      { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
      { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
      { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
      { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
      { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
      { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
      { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
      { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    ];
    this.cols = [
      { field: 'brand', header: 'brand' },
      { field: 'lastYearSale', header: 'lastYearSale' },
      { field: 'thisYearSale', header: 'thisYearSale' },
      { field: 'lastYearProfit', header: 'lastYearProfit' },
      { field: 'thisYearProfit', header: 'thisYearProfit' }
    ];
    console.log(this.el.nativeElement.querySelector('#input'))
    this.el.nativeElement.querySelector('#input').addEventListener('drop', this.fun)
  }

  fun(event) {
    // event.preventDefault();
  }
  clickhandler() {
    this.selectedCars3.push(this.sales[0])
  }

  test() {
    // import { filter, map } from 'rxjs/operators';
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n),
      );
      squareOdd.subscribe((x) => console.log(x));
  }
}
